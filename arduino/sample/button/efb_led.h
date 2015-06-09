#ifndef __EFB_LED_H__
#define __EFB_LED_H__

#include "efb_device.h"

class EfbLed : public EfbDevice
{
	public:
		EfbLed(EfbEventQueue *efbEventQueue, int pinNum);
		virtual void tick()
		{

		}
		void setStatus(int status);
	private:
		int mPinNum;
};

#endif