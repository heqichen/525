#include "efb_led.h"

#include <Arduino.h>

EfbLed::EfbLed(EfbEventQueue *efbEventQueue, int pinNum)
	:	EfbDevice	(efbEventQueue),
		mPinNum	(pinNum)
{
	pinMode(mPinNum, OUTPUT);
	digitalWrite(mPinNum, LOW);

}

void EfbLed::setStatus(int status)
{
	digitalWrite(mPinNum, status);
}