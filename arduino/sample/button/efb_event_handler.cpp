#include "efb_event_handler.h"

#include "efb_event_queue.h"

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
	EfbEvent evt = mEfbEventQueue->pop();

	//debug
	if (evt.type != 0)
	{
						pinMode(12, OUTPUT);
					int i;
					for (i=0; i<5; ++i)
					{
						digitalWrite(12, HIGH);
						delay(40);
						digitalWrite(12, LOW);
						delay(40);
					}
	}
}