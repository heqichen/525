#include "efb_device.h"
#include "efb_button.h"
#include "efb_led.h"
#include "efb_engine.h"
#include "efb_event_queue.h"
#include "efb_event_handler.h"


EfbEventQueue *efbEventQueue;
EfbEventHandler *efbEventHandler;
EfbEngine *efbEngine;

EfbButton *button2;
EfbButton *button3;
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

bool l13status;

void eventChange()
{
	led13->setStatus(l13status);
	l13status = !l13status;
}

void setup()
{
	//for debug
	Serial.begin(9600);
	//end of debug
}



void loop()
{
	//setup EFB environment
	efbEventQueue = new EfbEventQueue();
	efbEventHandler = new EfbEventHandler(efbEventQueue);
	efbEngine = new EfbEngine(efbEventHandler);
	
	button2 = new EfbButton(efbEventQueue, 2);
	button3 = new EfbButton(efbEventQueue, 3);
	led13 = new EfbLed(efbEventQueue, 13);
	led12 = new EfbLed(efbEventQueue, 12);

	efbEngine->registerEvent(EfbEvent(button2->getId(), BUTTON_EVENT, BUTTON_EVENT_PRESSED), event1);
	efbEngine->registerEvent(EfbEvent(button3->getId(), BUTTON_EVENT, BUTTON_EVENT_CHANGE), eventChange);
//	event1();
	while (true)
	{
		button2->tick();
		button3->tick();
		led12->tick();
		led13->tick();
		efbEventHandler->tick();
		delay(20);
	}

}