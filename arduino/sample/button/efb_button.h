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
		EfbButton(EfbEventQueue *efbEventQueue, int pinNum);
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
					mEfbEventQueue->push(EfbEvent(getId(), BUTTON_EVENT, BUTTON_EVENT_CHANGE));
					//TODO add rise and down edge
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