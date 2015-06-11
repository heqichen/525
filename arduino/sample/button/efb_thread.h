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
			if (mCallback != NULL)
			{
				mCallback();
			}
			mCallback = NULL;
			ePause();
		}
		
		void go(EventCallback callback);
		bool available();

	private:
		SCoopStack_t* mStackPtr;
		ptrInt mStackSize;
		EventCallback mCallback;
		bool mIsReady;

		void ePause();
		void eResume();

};

#endif

