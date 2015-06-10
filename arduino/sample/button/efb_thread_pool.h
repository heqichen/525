#ifndef __EFB_THREAD_POOL_H__
#define __EFB_THREAD_POOL_H__

#include "SCoop.h"

typedef SCoopStack_t* StackPtr;

#define EFB_STACK_SIZE	128
#define EFB_THREAD_POOL_SIZE	10


class EfbThreadPool
{
	public:
		EfbThreadPool();
	private:
		SCoopTask mThreadPool[EFB_THREAD_POOL_SIZE];
		StackPtr *mStackPtrList;
};

#endif
