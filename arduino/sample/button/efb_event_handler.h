#ifndef __EFB_EVENT_HANDLER_H__
#define __EFB_EVENT_HANDLER_H__

#include "efb_event_queue.h"
#include "efb_const.h"
#include "efb_thread_pool.h"

class EfbEventHandler
{
	public:
		EfbEventHandler(EfbEventQueue *efbEventQueue, EfbThreadPool *efbThreadPool);
		void addCallback(EfbEvent event, EventCallback cb);
		void tick();
	private:
		EfbEventQueue *mEfbEventQueue;
		EfbThreadPool *mEfbThreadPool;
		int mEventCallbackCount;
		EventCallback mEventCallbackList[16];
		EfbEvent mEventList[16];
		
		void fireEvent(EventCallback cb);
};

#endif