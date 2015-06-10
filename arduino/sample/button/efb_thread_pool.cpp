#include "efb_thread_pool.h"


void dummy()
{
	Serial.println("hello from dummy");
	sleep(1000);
}

defineStack(efbStack0, EFB_STACK_SIZE);
defineStack(efbStack1, EFB_STACK_SIZE);
defineStack(efbStack2, EFB_STACK_SIZE);
defineStack(efbStack3, EFB_STACK_SIZE);
defineStack(efbStack4, EFB_STACK_SIZE);
defineStack(efbStack5, EFB_STACK_SIZE);
defineStack(efbStack6, EFB_STACK_SIZE);
defineStack(efbStack7, EFB_STACK_SIZE);
defineStack(efbStack8, EFB_STACK_SIZE);
defineStack(efbStack9, EFB_STACK_SIZE);


EfbThreadPool::EfbThreadPool()
{
	mStackPtrList = new StackPtr[10];
	mStackPtrList[0] = efbStack0;
	mStackPtrList[1] = efbStack1;
	mStackPtrList[2] = efbStack2;
	mStackPtrList[3] = efbStack3;
	mStackPtrList[4] = efbStack4;
	mStackPtrList[5] = efbStack5;
	mStackPtrList[6] = efbStack6;
	mStackPtrList[7] = efbStack7;
	mStackPtrList[8] = efbStack8;
	mStackPtrList[9] = efbStack9;

	int i;
	for (i=0; i<EFB_THREAD_POOL_SIZE; ++i)
	{
		//I check the sizeof(efbStackX), it's 128, so it only works on mega2560
		mThreadPool[i].init(mStackPtrList[i], EFB_STACK_SIZE, dummy);
	}
}