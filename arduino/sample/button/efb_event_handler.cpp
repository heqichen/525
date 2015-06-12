#include "efb_event_handler.h"

#include "efb_event_queue.h"
#include "efb_thread_pool.h"
#include "efb_runnable.h"

#include <Arduino.h>

EfbEventHandler::EfbEventHandler(EfbEventQueue *efbEventQueue, EfbThreadPool *efbThreadPool)
	:	mEfbEventQueue	(efbEventQueue),
		mEfbThreadPool	(efbThreadPool),
		mEventCallbackCount	(0)
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
			if (conNum > 0)
			{
				//putCallbackInWaitList(runnable);
			}
			else
			{
				putCallbackInThread(runnable);
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