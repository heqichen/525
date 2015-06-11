#ifndef __EFB_THREAD_H__
#define __EFB_THREAD_H__

#include "efb_const.h"
#include "SCoop.h"


class EfbThread : public SCoopTask
{
	public:
		EfbThread(SCoopStack_t* stack, ptrInt size);
		void reset();
		virtual void loop()
		{
			pause();
			if (mCallback != NULL)
			{
				mCallback();
			}
			mCallback = NULL;
			reset();
		}

		void go(EventCallback callback);

	private:
		SCoopStack_t* mStackPtr;
		ptrInt mStackSize;
		EventCallback mCallback;

};

#endif

