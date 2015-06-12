#ifndef __EFB_RUNNABLE_H__
#define __EFB_RUNNABLE_H__

#include "efb_const.h"




class EfbRunnable
{
	public:
		EfbRunnable(EventCallback cb, int concMode);
		int getConcurrencyMode() const {return mConcurrencyMode;}
		void execute();
	private:
		EventCallback mEventCallback;
		int mConcurrencyMode;
};

typedef EfbRunnable* EfbRunnablePtr;

#endif