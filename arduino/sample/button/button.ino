#include "efb_device.h"
#include "efb_button.h"
#include "efb_led.h"
#include "efb_engine.h"
#include "efb_event_queue.h"
#include "efb_event_handler.h"
#include "efb_thread_pool.h"


#include "SCoop.h"

EfbEventQueue *efbEventQueue;
EfbEventHandler *efbEventHandler;
EfbEngine *efbEngine;
EfbThreadPool *efbThreadPool;


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
		sleep(200);
		led12->setStatus(LOW);
		sleep(200);
	}
}







void setup()
{
	//for debug
	Serial.begin(9600);
	//end of debug

}

defineTaskLoop(task2) // user quick definition of task2 object
{ digitalWrite(13, HIGH); sleep(100); digitalWrite(13,LOW); sleep(100); }




bool l13status = true;

void event2()
{
	if (l13status)
	{
		task2.pause();
	}
	else
	{
		task2.resume();
	}
	l13status = !l13status;
}

void loop()
{
	//setup EFB environment
	efbThreadPool = new EfbThreadPool();
	efbEventQueue = new EfbEventQueue();
	efbEventHandler = new EfbEventHandler(efbEventQueue, efbThreadPool);
	efbEngine = new EfbEngine(efbEventHandler);
	
	
	button2 = new EfbButton(efbEventQueue, 2);
	button3 = new EfbButton(efbEventQueue, 3);
	led13 = new EfbLed(efbEventQueue, 13);
	led12 = new EfbLed(efbEventQueue, 12);

	efbEngine->registerEvent(EfbEvent(button2->getId(), BUTTON_EVENT, BUTTON_EVENT_PRESSED), event1, EFB_THREAD_SYNC);
	efbEngine->registerEvent(EfbEvent(button3->getId(), BUTTON_EVENT, BUTTON_EVENT_PRESSED), event2, EFB_THREAD_REENTRANT);
//	event1();

	mySCoop.start();
	while (true)
	{
		//Serial.println("tick");
		button2->tick();
		button3->tick();
		led12->tick();
		led13->tick();
		efbEventHandler->tick();
		sleep(5);

		yield();
	}

}