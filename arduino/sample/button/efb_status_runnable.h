#ifndef __EFB_STATUS_RUNNABLE_H__
#define __EFB_STATUS_RUNNABLE_H__

#include "efb_runnable.h"

class EfbStatusRunnable : public EfbRunnable
{
	EfbStatusRunnable(EventCallback cb);
};


#endif
