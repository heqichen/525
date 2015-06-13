#include "efb_event_handler.h"

#include "efb_event_queue.h"
#include "efb_thread_pool.h"
#include "efb_runnable.h"

#include <Arduino.h>

EfbEventHandler::EfbEventHandler(EfbEventQueue *efbEventQueue, EfbThreadPool *efbThreadPool)
	:	mEfbEventQueue	(efbEventQueue),
		mEfbThreadPool	(efbThreadPool),
		mEventCallbackCount	(0),
		mSyncCallbackWaitList	(NULL)
{

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

void EfbEventHandler::fetchFromPendingList()
{
	EfbRunnablePtr currentPtr = mSyncCallbackWaitList;
	while (currentPtr != NULL)
	{
		if (currentPtr->getConcurrencyNumber() == 0)
		{
			Serial.print("fetch in pending list ");
			Serial.print((int)currentPtr, HEX);
			Serial.print(" : pending number: ");
			Serial.println(currentPtr->getPendingNumber());
			//check it and reove it from list run it

			currentPtr->decPendingNumber();
			if (currentPtr->getPendingNumber() == 0)
			{
				//remote the event from pending list
			}

			putCallbackInThread(currentPtr);
		}
		currentPtr = currentPtr->next;
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
				
				if (runnable->getPendingNumber() == 1)
				{
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
	EfbThread* thread = mEfbThreadPool->getAvailableThread();
	if (thread != NULL)
	{
		thread->go(runnable);
	}
}

void EfbEventHandler::putCallbackInWaitList(EfbRunnablePtr runnable)
{
	if (mSyncCallbackWaitList == NULL)
	{
		mSyncCallbackWaitList = runnable;
	}
	else
	{
		EfbRunnablePtr currentPtr = mSyncCallbackWaitList;
		while (currentPtr->next != NULL)
		{
			currentPtr = currentPtr->next;
		}
		currentPtr->next = runnable;
		runnable->next = NULL;
	}
	
	Serial.print("put ");
	Serial.print((int)runnable, HEX);
	Serial.print(" into pending list");
	Serial.print(" : pending number: ");
	Serial.println(runnable->getPendingNumber());


	Serial.print("mSyncCallbackWaitList is ");
	Serial.println((int)mSyncCallbackWaitList, HEX);
	
}



void EfbEventHandler::removeCallbackFromWaitList(EfbRunnablePtr runnable)
{

}