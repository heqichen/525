#ifndef __EFB_BUTTON_H__
#define __EFB_BUTTON_H__

#include "efb_device.h"

#include <Arduino.h>

#define BUTTON_EVENT	0x01

#define BUTTON_EVENT_CHANGE	0x00
#define BUTTON_EVENT_PRESSED	0x01
#define BUTTON_EVENT_PUSHDOWN	0x02

class EfbButton	:	public EfbDevice
{
	public:
		EfbButton(int pinNum);
		virtual void tick()
		{
			int currentStatus = digitalRead(mPinNum);
			if (currentStatus != mStatus)
			{
				if (mTransStatus == currentStatus)
				{
					//confirm a status changing
					mStatus = currentStatus;

					//trigger a event
					pinMode(12, OUTPUT);
					int i;
					for (i=0; i<5; ++i)
					{
						digitalWrite(12, HIGH);
						delay(40);
						digitalWrite(12, LOW);
						delay(40);
					}
				}
				else
				{
					//just a noise, do nothing
				}
			}
			mTransStatus = currentStatus;
		}

		int getStatus();

	private:
		int mStatus;
		int mTransStatus;
		int mPinNum;
		 

};

#endif