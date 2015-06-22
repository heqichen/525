#include "efb_status_runnable.h"

EfbStatusRunnable::EfbStatusRunnable(EventCallback cb, EfbDevice *dev, int targetStatus)
	:	EfbRunnable		(cb, EFB_THREAD_SYNC),
		mDevice			(dev),
		mTargetStatus	(targetStatus)
{

}