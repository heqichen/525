#include "efb_engine.h"

#include "efb_runnable.h"

EfbEngine::EfbEngine(EfbEventHandler *efbEventHandler)
	:	mEfbEventHandler	(efbEventHandler)
{

}

void EfbEngine::registerEvent(EfbEvent event, EventCallback cb, int concMode)
{
	EfbRunnable *r = new EfbRunnable(cb, concMode);
	mEfbEventHandler->addCallback(event , r);
}

void EfbEngine::registerStaus(EfbDevice* device, int triggerStatus)
{
	
}

