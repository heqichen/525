#ifndef __EFB_EVENT_HANDLER_H__
#define __EFB_EVENT_HANDLER_H__

#include "efb_event_queue.h"
#include "efb_const.h"


class EfbEventHandler
{
	public:
		EfbEventHandler(EfbEventQueue *efbEventQueue);
		void addCallback(EfbEvent event, EventCallback cb);
		void tick();
	private:
		int mEventCallbackCount;
		EventCallback mEventCallbackList[16];
		EfbEvent mEventList[16];
		EfbEventQueue *mEfbEventQueue;
};

#endif