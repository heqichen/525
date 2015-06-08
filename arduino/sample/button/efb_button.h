#ifndef __EFB_BUTTON_H__
#define __EFB_BUTTON_H__

#include "efb_device.h"

class EfbButton	:	public EfbDevice
{
	public:
		EfbButton(int pinNum);
		virtual void tick()
		{

		}

		int getStatus();

	private:
		int mStatus;
		int mPinNum;

};

#endif