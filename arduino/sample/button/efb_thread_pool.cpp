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
	mThread[0] = new EfbThread(efbStack0, EFB_STACK_SIZE);
	mThread[1] = new EfbThread(efbStack1, EFB_STACK_SIZE);
	mThread[2] = new EfbThread(efbStack2, EFB_STACK_SIZE);
	mThread[3] = new EfbThread(efbStack3, EFB_STACK_SIZE);
	mThread[4] = new EfbThread(efbStack4, EFB_STACK_SIZE);
	mThread[5] = new EfbThread(efbStack5, EFB_STACK_SIZE);
	mThread[6] = new EfbThread(efbStack6, EFB_STACK_SIZE);
	mThread[7] = new EfbThread(efbStack7, EFB_STACK_SIZE);
	mThread[8] = new EfbThread(efbStack8, EFB_STACK_SIZE);
	mThread[9] = new EfbThread(efbStack9, EFB_STACK_SIZE);
}