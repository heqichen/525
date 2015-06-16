#ifndef __EFB_DEVICE_H__
#define __EFB_DEVICE_H__

#include "efb_event_queue.h"

class EfbDevice
{
	public:
		EfbDevice();
		void setEventQueue(EfbEventQueue *efbEventQueue);
		void setPort(int port);
		virtual void tick()
		{}
		virtual int getStatus()
		{
			return 0;
		}
		int getId() const {return mId;}
		int getPort() const {return mPort;}
		EfbDevice *nextDev;
	protected:
		int mId;
		int mPort;
		EfbEventQueue *mEfbEventQueue;
};

#endif