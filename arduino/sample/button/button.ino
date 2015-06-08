void setup()
{
	pinMode(13, OUTPUT);
	pinMode(2, INPUT);
}

void loop()
{
	int pinStatus = digitalRead(2);
	digitalWrite(13, pinStatus);
	delay(20);
}