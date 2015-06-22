#include "efb_ultrasonic.h"

#include <Arduino.h>

EfbUltrasonic::EfbUltrasonic(int trigPin, int echoPin)
	:	EfbDevice(),
		mTrigPin	(trigPin),
		mEchoPin	(echoPin),
		mStatus		(0),
		mLastMeasureTime	(0UL)

{
	setPort(trigPin);
	pinMode(trigPin, OUTPUT);
	digitalWrite(trigPin, LOW);
	pinMode(echoPin, INPUT);
}

void EfbUltrasonic::measure()
{
	if (millis() - mLastMeasureTime < MEASURE_INTERVAL)
	{
		return ;
	}
	delayMicroseconds(2);
	digitalWrite(mTrigPin, HIGH);
	delayMicroseconds(5);
	digitalWrite(mTrigPin,LOW);

	long duration;
	duration = pulseIn(mEchoPin,HIGH, 15000);

	//change duration to cm
	mStatus = duration * 17 / 1000;
	mLastMeasureTime = millis();
}