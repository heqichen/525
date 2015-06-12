#ifndef __EFB_RUNNABLE_H__
#define __EFB_RUNNABLE_H__

#include "efb_const.h"

#define EFB_THREAD_REENTRANT	0x01
#define EFB_THREAD_SYNC			0X02
#define EFB_THREAD_NONREENT		0x03

class EfbRunnable
{
	public:
		EfbRunnable(EventCallback cb, int concMode);
		int getConcurrencyMode() const {return mConcurrencyMode;}
		int getConcurrencyNumber() const {return mConcurrencyNum;}
		void execute();
	private:
		EventCallback mEventCallback;
		int mConcurrencyMode;
		int mConcurrencyNum;
};

typedef EfbRunnable* EfbRunnablePtr;

#endif