#include "efb_engine.h"

EfbEngine::EfbEngine()
	:	mEventCallbackCount	(0)
{

}

void EfbEngine::registerEvent(EfbEvent event, EventCallback cb)
{
	/*
	mEventCallbackList[mEventCallbackCount] = cb;
	mEventTypeList[mEventCallbackCount] = eventType;
	mEventArgList[mEventCallbackCount] = arg;
	*/
	++mEventCallbackCount;
}

void EfbEngine::registerStaus(EfbDevice* device, int triggerStatus)
{
	
}

EfbEngine Engine;