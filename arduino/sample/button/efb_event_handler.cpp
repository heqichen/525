#include "efb_event_handler.h"

#include "efb_event_queue.h"
#include "efb_thread_pool.h"

#include <Arduino.h>

EfbEventHandler::EfbEventHandler(EfbEventQueue *efbEventQueue)
	:	mEfbEventQueue	(efbEventQueue),
		mEventCallbackCount	(0)
{

}

void EfbEventHandler::addCallback(EfbEvent event, EventCallback cb)
{
	mEventCallbackList[mEventCallbackCount] = cb;
	mEventList[mEventCallbackCount] = event;
	++mEventCallbackCount;
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
					fireEvent(mEventCallbackList[i]);
				}
			}

		}
	}

}


void EfbEventHandler::fireEvent(EventCallback cb)
{
	cb();
}