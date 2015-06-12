#include "efb_runnable.h"

EfbRunnable::EfbRunnable(EventCallback cb, int concMode)
	:	mEventCallback	(cb),
		mConcurrencyMode(concMode)
{

}

void EfbRunnable::execute()
{
	mEventCallback();
}