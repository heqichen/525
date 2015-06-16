#include "efb_device.h"


int deviceIdGenerator = 1;

EfbDevice::EfbDevice()
	:	mEfbEventQueue	(NULL),
		nextDev			(NULL)
{
	mId = deviceIdGenerator;
	++deviceIdGenerator;
}

void EfbDevice::setEventQueue(EfbEventQueue *efbEventQueue)
{
	mEfbEventQueue = efbEventQueue;
}

void EfbDevice::setPort(int port)
{
	mPort = port;
}