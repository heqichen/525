#ifndef __EFB_EVENT_HANDLER_H__
#define __EFB_EVENT_HANDLER_H__

#include "efb_event_queue.h"
#include "efb_const.h"
#include "efb_thread_pool.h"
#include "efb_runnable.h"

class EfbEventHandler
{
	public:
		EfbEventHandler(EfbEventQueue *efbEventQueue, EfbThreadPool *efbThreadPool);
		void addCallback(EfbEvent event, EfbRunnable *r);
		void tick();
		void putCallbackInThread(EfbRunnablePtr runnable);
	private:
		EfbEventQueue *mEfbEventQueue;
		EfbThreadPool *mEfbThreadPool;
		int mEventCallbackCount;
		EfbRunnablePtr mCallbackList[16];
		EfbEvent mEventList[16];
		EfbRunnablePtr mSyncCallbackWaitList;

		void fetchFromPendingList();
		void fetchFromEventQueue();



		void launchCallback(EfbRunnablePtr runnable);
		
		void putCallbackInWaitList(EfbRunnablePtr runnable);
};

#endif