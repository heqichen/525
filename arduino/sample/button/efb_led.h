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

		virtual int getStatus()
		{
			return mStatus;
		}
	private:
		int mPinNum;
		int mStatus;
};

#endif