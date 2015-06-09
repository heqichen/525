#ifndef __EFB_RUNTIME_H__
#define __EFB_RUNTIME_H__

#include "efb_const.h"
#include "efb_device.h"

class EfbRuntime
{
	public:
		void registerEvent(int eventType, int arg, EventCallback cb);
		void registerStaus(EfbDevice* device, int triggerStatus);



	private:
		//static EfbRuntime mSingletonEfbRuntime;
		int mEventCallbackCount;
		EventCallback mEventCallbackList[16];
		int mEventTypeList[16];
		int mEventArgList[16];

		EfbRuntime();

};

#endif