#ifndef __EFB_STATUS_RUNNABLE_H__
#define __EFB_STATUS_RUNNABLE_H__

#include "efb_runnable.h"
#include "efb_device.h"
#include "SCoop.h"
class EfbStatusRunnable : public EfbRunnable
{
	public:
		EfbStatusRunnable(EventCallback cb, EfbDevice *dev, int targetStatus);
		virtual void execute()
		{
			while (true)
			{
				while (mDevice->getStatus() == mTargetStatus)
				{
					mEventCallback();
					yield();
				}
				sleep(10);
			}
		}
	private:
		EfbDevice *mDevice;
		int mTargetStatus;

};


#endif
