#include "efb_event_queue.h"

#include <Arduino.h>

EfbEventQueue::EfbEventQueue()
	:	CircleList<EfbEvent>	(16)
{

}

void EfbEventQueue::push(EfbEvent event)
{
	pushFront(event);
}



EfbEvent EfbEventQueue::pop()
{
	return popRear();
}

bool EfbEventQueue::available()
{
	return !isEmpty();
}