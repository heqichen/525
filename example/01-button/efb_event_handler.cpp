#include "efb_event_handler.h"

#include "efb_event_queue.h"
#include "efb_thread_pool.h"
#include "efb_runnable.h"

#include <Arduino.h>

void dummyCabllback()
{}

EfbEventHandler::EfbEventHandler(EfbEventQueue *efbEventQueue, EfbThreadPool *efbThreadPool)
	:	mEfbEventQueue	(efbEventQueue),
		mEfbThreadPool	(efbThreadPool),
		mEventCallbackCount	(0),
		mSyncCallbackWaitList	(NULL)
{
	mSyncCallbackWaitList = new EfbRunnable(dummyCabllback, 0);
}

void EfbEventHandler::addCallback(EfbEvent event, EfbRunnable *r)
{
	mCallbackList[mEventCallbackCount] = r;
	mEventList[mEventCallbackCount] = event;
	++mEventCallbackCount;
	Serial.print("an event register # ");
	Serial.println(mEventCallbackCount);
}



void EfbEventHandler::tick()
{
	fetchFromPendingList();
	fetchFromEventQueue();
}


void EfbEventHandler::fetchFromPendingList()
{
	EfbRunnablePtr parentRunnablePtr;
	EfbRunnablePtr currentRunnablePtr;
	EfbRunnablePtr tempRunnablePtr;

	parentRunnablePtr = mSyncCallbackWaitList;
	currentRunnablePtr = parentRunnablePtr->next;

	while (currentRunnablePtr != NULL)
	{
		if (currentRunnablePtr->getConcurrencyNumber() == 0)
		{
			if (currentRunnablePtr->getPendingNumber() < 2)
			{
				//remove it from pending list
				//1. parent not changed, 
				//2. current move to next
				//3. put removed runnable to thread

				Serial.print("find an event in pending list to remove: ");
				Serial.println((int)currentRunnablePtr, HEX);

				currentRunnablePtr->decPendingNumber();
				tempRunnablePtr = currentRunnablePtr;

				currentRunnablePtr = currentRunnablePtr->next;
				parentRunnablePtr->next = currentRunnablePtr;
				tempRunnablePtr->next = NULL;

				putCallbackInThread(tempRunnablePtr);
			}
			else
			{
				Serial.print("find an event in pending list: ");
				Serial.print((int)currentRunnablePtr, HEX);
				Serial.print(" pending: ");
				Serial.println(currentRunnablePtr->getPendingNumber());

				//just put it into thread
				currentRunnablePtr->decPendingNumber();
				putCallbackInThread(currentRunnablePtr);
				parentRunnablePtr = parentRunnablePtr->next;
				currentRunnablePtr = parentRunnablePtr->next;
			}
		}
		else
		{
			//do not deal with this node
			parentRunnablePtr = parentRunnablePtr->next;
			currentRunnablePtr = parentRunnablePtr->next;
		}
	}
}


void EfbEventHandler::fetchFromEventQueue()
{
	while (mEfbEventQueue->available())
	{
		EfbEvent evt = mEfbEventQueue->pop();
		int i;
		//debug
		if (evt.type != 0)
		{
			for (i=0; i<mEventCallbackCount; ++i)
			{
				if (mEventList[i].deviceId == evt.deviceId
					&& mEventList[i].type == evt.type
					&& mEventList[i].arg == evt.arg)
				{
					launchCallback(mCallbackList[i]);
				}
			}
		}
	}
}


void EfbEventHandler::launchCallback(EfbRunnablePtr runnable)
{
	int conNum = runnable->getConcurrencyNumber();
	int conMode = runnable->getConcurrencyMode();

	switch (conMode)
	{
		case (EFB_THREAD_REENTRANT):
		{
			//just do it
			putCallbackInThread(runnable);
			break;
		}
		case (EFB_THREAD_SYNC):
		{
			if (conNum == 0)
			{
				putCallbackInThread(runnable);
			}
			else
			{
				//if already running, put runnable in the list
				runnable->incPendingNumber();
				
				if (runnable->getPendingNumber() < 2)
				{
					Serial.print("ready to put ");
					Serial.print((int)runnable, HEX);
					Serial.println(" into pending list");
					putCallbackInWaitList(runnable);
				}
				//already in wait list
				Serial.print("already in pending list: ");
				Serial.print((int)runnable, HEX);
				Serial.print(" : pending number: ");
				Serial.println(runnable->getPendingNumber());
			}
			break;
		}
		case (EFB_THREAD_NONREENT):
		{
			if (conNum == 0)
			{
				putCallbackInThread(runnable);
			}
			break;
		}
		default:
		{
			break;
		}
	}
}

void EfbEventHandler::putCallbackInThread(EfbRunnablePtr runnable)
{
	Serial.println("ready to put runnable in thread");

	EfbThread* thread = mEfbThreadPool->getAvailableThread();
	Serial.println("get a thread from pool");

	if (thread != NULL)
	{
		Serial.println("thread to go");
		thread->go(runnable);
	}
}

void EfbEventHandler::putCallbackInWaitList(EfbRunnablePtr runnable)
{

	EfbRunnablePtr currentPtr = mSyncCallbackWaitList;
	while (currentPtr->next != NULL)
	{
		currentPtr = currentPtr->next;
	}
	currentPtr->next = runnable;
	runnable->next = NULL;
	
	Serial.print("put ");
	Serial.print((int)runnable, HEX);
	Serial.print(" into pending list");
	Serial.print(" : pending number: ");
	Serial.println(runnable->getPendingNumber());


	Serial.print("mSyncCallbackWaitList is ");
	Serial.println((int)mSyncCallbackWaitList, HEX);
	
}

