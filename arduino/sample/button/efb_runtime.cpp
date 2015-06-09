#include "efb_runtime.h"

EfbRuntime::EfbRuntime()
	:	mEventCallbackCount	(0)
{

}

void EfbRuntime::registerEvent(int eventType, int arg, EventCallback cb)
{
	mEventCallbackList[mEventCallbackCount] = cb;
	mEventTypeList[mEventCallbackCount] = eventType;
	mEventArgList[mEventCallbackCount] = arg;
	++mEventCallbackCount;
}

void EfbRuntime::registerStaus(EfbDevice* device, int triggerStatus)
{
	
}