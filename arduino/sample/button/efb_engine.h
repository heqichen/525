#ifndef __EFB_RUNTIME_H__
#define __EFB_RUNTIME_H__

#include "efb_const.h"
#include "efb_device.h"
#include "efb_event_queue.h"
#include "efb_event_handler.h"

class EfbEngine
{
	public:
		void registerEvent(EfbEvent event, EventCallback cb, int concMode);
		void registerStatus(EfbDevice* device, int triggerStatus, EventCallback cb);
		EfbEngine(EfbEventHandler *efbEventHandler);
		void tick();
		void reportPortStatus();
		void setEventQueue(EfbEventQueue *queue);
		void addDevice(EfbDevice *dev);
	private:
		EfbEventHandler *mEfbEventHandler;
		EfbEventQueue *mEfbEventQueue;
		EfbDevice *mDeviceList;

		void tickDevice();		
};

#endif