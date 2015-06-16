#include "efb_engine.h"

#include "efb_runnable.h"
#include "efb_status_runnable.h"
#include "SCoop.h"

EfbEngine::EfbEngine(EfbEventHandler *efbEventHandler)
	:	mEfbEventHandler	(efbEventHandler)
{

}

void EfbEngine::registerEvent(EfbEvent event, EventCallback cb, int concMode)
{
	EfbRunnable *r = new EfbRunnable(cb, concMode);
	mEfbEventHandler->addCallback(event , r);
}

void EfbEngine::registerStatus(EfbDevice* device, int triggerStatus, EventCallback cb)
{
	EfbRunnable *r = new EfbStatusRunnable(cb, device, triggerStatus);
	mEfbEventHandler->putCallbackInThread(r);
}


void EfbEngine::tick()
{
	while (Serial.available())
	{
		char c = Serial.read();
		switch (c)
		{
			case ('p'):
			{
				reportPortStatus();
				break;
			}
			default:
			{
				break;
			}
			
		}
	}
}

void EfbEngine::reportPortStatus()
{
	Serial.println("{\"p1\":3, \"p2\":5}");
}