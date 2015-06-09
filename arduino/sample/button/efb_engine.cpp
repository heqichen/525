#include "efb_engine.h"

EfbEngine::EfbEngine(EfbEventHandler *efbEventHandler)
	:	mEfbEventHandler	(efbEventHandler)
{

}

void EfbEngine::registerEvent(EfbEvent event, EventCallback cb)
{
	mEfbEventHandler->addCallback(event , cb);
}

void EfbEngine::registerStaus(EfbDevice* device, int triggerStatus)
{
	
}

