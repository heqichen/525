#include "efb_device.h"
#include "efb_button.h"
#include "efb_led.h"

EfbButton *button2;
EfbLed *led13;
EfbLed *led12;


typedef void(*EventCallback)(void);




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




class EfbRuntime
{
	public:


		void registerEvent(int eventType, int arg, EventCallback cb)
		{
			mEventCallbackList[mEventCallbackCount] = cb;
			mEventTypeList[mEventCallbackCount] = eventType;
			mEventArgList[mEventCallbackCount] = arg;
			++mEventCallbackCount;
		}



	private:
		//static EfbRuntime mSingletonEfbRuntime;
		int mEventCallbackCount;
		EventCallback mEventCallbackList[16];
		int mEventTypeList[16];
		int mEventArgList[16];

		EfbRuntime()
			:	mEventCallbackCount	(0)
		{

		}

};

EfbRuntime *getEfbRuntime()
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

}