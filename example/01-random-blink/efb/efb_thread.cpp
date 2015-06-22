#include "efb_thread.h"

void dummyFunc()
{
	Serial.println("dummy");
}

EfbThread::EfbThread(SCoopStack_t* stack, ptrInt size)
	:	mStackPtr	(stack),
		mStackSize	(size),
		mRunnable	(NULL),
		mIsReady	(false),
		SCoopTask	(mStackPtr, mStackSize, dummyFunc)
{
	//Serial.println("ready to create thread");
	//init(mStackPtr, mStackSize, dummyFunc);
}


void EfbThread::reset()
{
	init(mStackPtr, mStackSize, dummyFunc);
}

void EfbThread::go(EfbRunnablePtr runnable)
{
	mRunnable = runnable;
	runnable->incConcurrencyNumber();
	eResume();
}

void EfbThread::ePause()
{
	SCoopTask::pause();
	mIsReady = true;
}

void EfbThread::eResume()
{
	mIsReady = false;
	SCoopTask::resume();
}

bool EfbThread::available()
{
	return mIsReady;
}