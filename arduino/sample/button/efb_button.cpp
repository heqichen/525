#include "efb_button.h"
#include "efb_const.h"
#include <Arduino.h>

EfbButton::EfbButton(int port)
	:	EfbDevice	()
{
	setPort(port);
	pinMode(port, INPUT);
	mStatus = digitalRead(port);
	mTransStatus = mStatus;

	Serial.println(getId());
}

