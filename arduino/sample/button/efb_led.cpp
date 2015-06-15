#include "efb_led.h"

#include <Arduino.h>

EfbLed::EfbLed(EfbEventQueue *efbEventQueue, int pinNum)
	:	EfbDevice	(efbEventQueue),
		mPinNum	(pinNum),
		mStatus	(LOW)

{
	pinMode(mPinNum, OUTPUT);
	digitalWrite(mPinNum, LOW);
}

void EfbLed::setStatus(int status)
{
	mStatus = status;
	digitalWrite(mPinNum, status);
}