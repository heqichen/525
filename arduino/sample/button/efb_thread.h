#ifndef __EFB_THREAD_H__
#define __EFB_THREAD_H__

#include "efb_const.h"
#include "SCoop.h"
#include "efb_runnable.h"

#include <Arduino.h>

class EfbThread : public SCoopTask
{
	public:
		EfbThread(SCoopStack_t* stack, ptrInt size);
		void reset();
		
		virtual void loop()
		{
			if (mRunnable != NULL)
			{
				mRunnable->execute();
				mRunnable->decConcurrencyNumber();
			}
			mRunnable = NULL;
			ePause();
			Serial.println("ok");
		}
		
		void go(EfbRunnablePtr runnable);
		bool available();

	private:
		SCoopStack_t* mStackPtr;
		ptrInt mStackSize;
		EfbRunnablePtr mRunnable;
		bool mIsReady;

		void ePause();
		void eResume();

};

#endif

