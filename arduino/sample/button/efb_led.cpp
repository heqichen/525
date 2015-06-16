#include "efb_led.h"

#include <Arduino.h>

EfbLed::EfbLed(int port)
	:	EfbDevice	()

{
	setPort(port);
	pinMode(port, OUTPUT);
	digitalWrite(port, LOW);
}

void EfbLed::setStatus(int status)
{
	mStatus = status;
	digitalWrite(mPort, status);
}