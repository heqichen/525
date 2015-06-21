#include <Arduino.h>

void setup()
{
	pinMode(7, OUTPUT);
	pinMode(13, OUTPUT);
}

void loop()
{
	digitalWrite(7, HIGH);
	digitalWrite(13, LOW);
	delay(500);
	digitalWrite(7, LOW);
	digitalWrite(13, HIGH);
	delay(500);
}
