#ifndef __EFB_BUTTON_H__
#define __EFB_BUTTON_H__

#include "efb_device.h"
#include "efb_event_queue.h"

#include <Arduino.h>

#define BUTTON_EVENT	0x01

#define BUTTON_EVENT_CHANGE	0x01
#define BUTTON_EVENT_PRESSED	0x02
#define BUTTON_EVENT_PUSHDOWN	0x03

class EfbButton	:	public EfbDevice
{
	public:
		EfbButton(int port);
		virtual void tick()
		{
			int currentStatus = digitalRead(mPort);
			if (currentStatus != mStatus)
			{
				if (mTransStatus == currentStatus)
				{
					//confirm a status changing
					mStatus = currentStatus;
					//trigger a event
					mEfbEventQueue->push(EfbEvent(getId(), BUTTON_EVENT, BUTTON_EVENT_CHANGE));
					
					if (mStatus == EFB_LOW)
					{
						mEfbEventQueue->push(EfbEvent(getId(), BUTTON_EVENT, BUTTON_EVENT_PRESSED));
					}
					else
					{
						mEfbEventQueue->push(EfbEvent(getId(), BUTTON_EVENT, BUTTON_EVENT_PUSHDOWN));
					}
				}
				else
				{
					//just a noise, do nothing
				}
			}
			mTransStatus = currentStatus;
		}

		virtual int getStatus()
		{
			return mStatus;
		}

	private:
		int mStatus;
		int mTransStatus;

};

#endif