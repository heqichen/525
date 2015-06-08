#include "efb_led.h"

#include <Arduino.h>

EfbLed::EfbLed(int pinNum)
	:	mPinNum	(pinNum)
{
	pinMode(mPinNum, OUTPUT);
	digitalWrite(mPinNum, LOW);

}

void EfbLed::setStatus(int status)
{
	digitalWrite(mPinNum, status);
}