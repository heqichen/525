#include "efb_runnable.h"

#include <Arduino.h>

EfbRunnable::EfbRunnable(EventCallback cb, int concMode)
	:	mEventCallback	(cb),
		mConcurrencyMode(concMode),
		mConcurrencyNum	(0)
{

}

void EfbRunnable::execute()
{
	++mConcurrencyNum;
	mEventCallback();
	--mConcurrencyNum;
}