#include "efb_device.h"


int deviceIdGenerator = 1;

EfbDevice::EfbDevice(EfbEventQueue *efbEventQueue)
	:	mEfbEventQueue	(efbEventQueue)
{
	mId = deviceIdGenerator;
	++deviceIdGenerator;
}
