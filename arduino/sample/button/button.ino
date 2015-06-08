#include "efb_device.h"
#include "efb_button.h"

EfbButton *button2 = new EfbButton(2);






void setup()
{
	pinMode(13, OUTPUT);
}

void loop()
{
	if (button2->getStatus())
	{
		digitalWrite(13, HIGH);
	}
	else
	{
		digitalWrite(13, LOW);
	}
	delay(20);
}