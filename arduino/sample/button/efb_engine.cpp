#include "efb_engine.h"

#include "efb_runnable.h"
#include "efb_status_runnable.h"
#include "SCoop.h"

EfbEngine::EfbEngine(EfbEventHandler *efbEventHandler)
	:	mEfbEventHandler	(efbEventHandler),
		mDeviceList			(NULL)
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
	tickDevice();
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


// {"message":"portview","portlist":[13,2], "valuelist":[1,0]}
void EfbEngine::reportPortStatus()
{
	EfbDevice *devPtr = mDeviceList;
	Serial.print("{\"message\":\"portview\",\"portlist\":[");
	if (devPtr != NULL)
	{
		Serial.print(devPtr->getPort());
		devPtr = devPtr->nextDev;
	}
	while (devPtr != NULL)
	{
		Serial.print(",");
		Serial.print(devPtr->getPort());
		devPtr = devPtr->nextDev;
	}
	Serial.print("], \"valuelist\":[");

	devPtr = mDeviceList;
	if (devPtr != NULL)
	{
		Serial.print(devPtr->getStatus());
		devPtr = devPtr->nextDev;
	}
	while (devPtr != NULL)
	{
		Serial.print(",");
		Serial.print(devPtr->getStatus());
		devPtr = devPtr->nextDev;
	}
	Serial.println("]}");
}

void EfbEngine::addDevice(EfbDevice *dev)
{
	dev->setEventQueue(mEfbEventQueue);
	dev->nextDev = mDeviceList;
	mDeviceList = dev;
}

void EfbEngine::setEventQueue(EfbEventQueue *queue)
{
	mEfbEventQueue = queue;
	EfbDevice *devPtr = mDeviceList;
	while (devPtr != NULL)
	{
		devPtr->setEventQueue(mEfbEventQueue);
		devPtr = devPtr->nextDev;
	}
}

void EfbEngine::tickDevice()
{
	EfbDevice *devPtr = mDeviceList;
	while (devPtr != NULL)
	{
		devPtr->tick();
		devPtr = devPtr->nextDev;
	}
}