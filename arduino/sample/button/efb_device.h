#ifndef __EFB_DEVICE_H__
#define __EFB_DEVICE_H__

#include "efb_event_queue.h"

class EfbDevice
{
	public:
		EfbDevice(EfbEventQueue *efbEventQueue);
		virtual void tick()
		{}
		int getId() const {return mId;}
	protected:
		int mId;
		EfbEventQueue *mEfbEventQueue;
};

#endif