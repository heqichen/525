#include "efb_device.h"
#include "efb_button.h"
#include "efb_led.h"
#include "efb_ultrasonic.h"
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
EfbButton *button4;
EfbLed *led13;
EfbLed *led12;
EfbLed *led11;
EfbUltrasonic *us5;
static int a = 0;

void event1()
{
	/*
	int i;
	for (i=0; i<5; ++i)
	{
		led12->setStatus(HIGH);
		sleep(200);
		led12->setStatus(LOW);
		sleep(200);
	}
	*/
	++a;
	int i;
	for (i=0; i<a; ++i)
	{
		led12->setStatus(HIGH);
		sleep(40);
		led12->setStatus(LOW);
		sleep(40);
	}
	sleep(500);

}



void setup()
{
	//for debug
	Serial.begin(115200);
	//end of debug

}

defineTaskLoop(task2) // user quick definition of task2 object
{
	led13->setStatus(HIGH);
	sleep(100);
	led13->setStatus(LOW);
	sleep(100);
}




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

void event3()
{
	led11->setStatus(HIGH);
	sleep(50);
	led11->setStatus(LOW);
	sleep(50);
}

void loop()
{
	//setup EFB environment
	efbThreadPool = new EfbThreadPool();
	efbEventQueue = new EfbEventQueue();
	efbEventHandler = new EfbEventHandler(efbEventQueue, efbThreadPool);
	efbEngine = new EfbEngine(efbEventHandler);
	efbEngine->setEventQueue(efbEventQueue);

	button2 = new EfbButton(2);
	efbEngine->addDevice(button2);
	button3 = new EfbButton(3);
	efbEngine->addDevice(button3);
	button4 = new EfbButton(4);
	efbEngine->addDevice(button4);
	led13 = new EfbLed(13);
	efbEngine->addDevice(led13);
	led12 = new EfbLed(12);
	efbEngine->addDevice(led12);
	led11 = new EfbLed(11);
	efbEngine->addDevice(led11);
	us5 = new EfbUltrasonic(5, 6);
	efbEngine->addDevice(us5);

	efbEngine->registerEvent(EfbEvent(button2->getId(), BUTTON_EVENT, BUTTON_EVENT_PRESSED), event1, EFB_THREAD_SYNC);
	efbEngine->registerEvent(EfbEvent(button3->getId(), BUTTON_EVENT, BUTTON_EVENT_PRESSED), event2, EFB_THREAD_REENTRANT);
	efbEngine->registerStatus(button4, LOW, event3);

	while (true)
	{
		efbEngine->tick();
		efbEventHandler->tick();
		sleep(5);
	}

}