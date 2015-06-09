#include "efb_engine.h"
#include "efb_event_queue.h"


EfbEngine::EfbEngine()
	:	mEventCallbackCount	(0)
{

}

void EfbEngine::registerEvent(EfbEvent event, EventCallback cb)
{
	mEventCallbackList[mEventCallbackCount] = cb;
	mEventList[mEventCallbackCount] = event;
	++mEventCallbackCount;
}

void EfbEngine::registerStaus(EfbDevice* device, int triggerStatus)
{
	
}

EfbEngine Engine;
EfbEventQueue efbEventQueue;
