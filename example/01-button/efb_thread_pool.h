#ifndef __EFB_THREAD_POOL_H__
#define __EFB_THREAD_POOL_H__

#include "efb_thread.h"


#define EFB_STACK_SIZE	128
#define EFB_THREAD_POOL_SIZE	10


class EfbThreadPool
{
	public:
		EfbThreadPool();
		EfbThread *getAvailableThread();
		
	private:
		bool isReady();
		EfbThread *mThread[10];
};

#endif
