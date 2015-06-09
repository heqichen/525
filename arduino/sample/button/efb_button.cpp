#include "efb_button.h"
#include "efb_const.h"
#include <Arduino.h>

EfbButton::EfbButton(int pinNum)
	:	mPinNum(pinNum)
{
	pinMode(pinNum, INPUT);
	mStatus = digitalRead(pinNum);
	mTransStatus = mStatus;
}

int EfbButton::getStatus()
{
	return mStatus;
}