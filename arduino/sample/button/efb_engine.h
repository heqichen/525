#ifndef __EFB_RUNTIME_H__
#define __EFB_RUNTIME_H__

#include "efb_const.h"
#include "efb_device.h"
#include "efb_event_queue.h"
#include "efb_event_handler.h"

class EfbEngine
{
	public:
		void registerEvent(EfbEvent event, EventCallback cb);
		void registerStaus(EfbDevice* device, int triggerStatus);
		EfbEngine(EfbEventHandler *efbEventHandler);
	private:
		EfbEventHandler *mEfbEventHandler;
};

#endif