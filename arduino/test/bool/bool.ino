void setup()
{
	Serial.begin(9600);
}

void loop()
{
	bool a;
	a = false;
	a = !a;
	Serial.println(a, HEX);
	delay(1000);
}