#include "efb_device.h"
#include "efb_button.h"
#include "efb_led.h"

EfbButton *button2;
EfbLed *led13;
EfbLed *led12;







void event1()
{
	int i;
	for (i=0; i<5; ++i)
	{
		led12->setStatus(HIGH);
		delay(40);
		led12->setStatus(LOW);
		delay(40);
	}
}

void setup()
{

}



void loop()
{
	button2 = new EfbButton(2);
	led13 = new EfbLed(13);
	led12 = new EfbLed(12);
//	event1();
	while (true)
	{
		button2->tick();
		led12->tick();
		led13->tick();
		
		delay(20);
	}

}