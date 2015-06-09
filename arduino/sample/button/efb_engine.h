#ifndef __EFB_RUNTIME_H__
#define __EFB_RUNTIME_H__

#include "efb_const.h"
#include "efb_device.h"
#include "efb_event_queue.h"

class EfbEngine
{
	public:
		void registerEvent(EfbEvent event, EventCallback cb);
		void registerStaus(EfbDevice* device, int triggerStatus);
		EfbEngine();
	private:
		int mEventCallbackCount;
		EventCallback mEventCallbackList[16];
		EfbEvent mEventList[16];

		

};

extern EfbEngine Engine;
extern EfbEventQueue efbEventQueue;


#endif