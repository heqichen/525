#include "efb_thread.h"

void dummyFunc()
{}

EfbThread::EfbThread(SCoopStack_t* stack, ptrInt size)
	:	mStackPtr	(stack),
		mStackSize	(size),
		mCallback	(NULL)
{

}


void EfbThread::reset()
{
	init(mStackPtr, mStackSize, dummyFunc);
	state = SCoopNEW;
}

void EfbThread::go(EventCallback callback)
{
	mCallback = callback;
	resume();
}