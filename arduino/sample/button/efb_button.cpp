#include "efb_button.h"
#include "efb_const.h"
#include <Arduino.h>

EfbButton::EfbButton(EfbEventQueue *efbEventQueue, int pinNum)
	:	EfbDevice	(efbEventQueue),
		mPinNum		(pinNum)
{
	pinMode(pinNum, INPUT);
	mStatus = digitalRead(pinNum);
	mTransStatus = mStatus;

	Serial.println(getId());
}

