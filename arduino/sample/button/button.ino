#include "efb_device.h"
#include "efb_button.h"
#include "efb_led.h"

EfbButton *button2 = new EfbButton(2);
EfbLed *led13 = new EfbLed(13);





void setup()
{
	pinMode(13, OUTPUT);
}

void loop()
{
	if (button2->getStatus())
	{
		led13->setStatus(HIGH);
	}
	else
	{
		led13->setStatus(LOW);
	}
	delay(20);
}