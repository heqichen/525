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
					fireEvent(mCallbackList[i]);
				}
			}

		}
	}

}


void EfbEventHandler::fireEvent(EfbRunnablePtr runnable)
{
	EfbThread* thread = mEfbThreadPool->getAvailableThread();
	if (thread != NULL)
	{
		thread->go(runnable);
	}
}