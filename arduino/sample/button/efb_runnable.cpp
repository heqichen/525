#include "efb_runnable.h"

#include <Arduino.h>

EfbRunnable::EfbRunnable(EventCallback cb, int concMode)
	:	next	(NULL),
		mEventCallback	(cb),
		mConcurrencyMode(concMode),
		mConcurrencyNum	(0),
		mPendingNum		(0)
{

}

