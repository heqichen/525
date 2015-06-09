#include "efb_event_queue.h"

#include <Arduino.h>

EfbEventQueue::EfbEventQueue()
{

}

void EfbEventQueue::push(EfbEvent event)
{
	mEvent = event;
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

EfbEvent EfbEventQueue::pop()
{
	EfbEvent ret = mEvent;
	mEvent = EfbEvent(0, 0);
	return ret;
}