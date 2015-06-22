#ifndef __EFB_ULTRASONIC_H__
#define __EFB_ULTRASONIC_H__

#include "efb_device.h"

#define MEASURE_INTERVAL 600

class EfbUltrasonic : public EfbDevice
{
	public:
		EfbUltrasonic(int trigPin, int echoPin);
		virtual void tick()
		{
			measure();
		}

		virtual int getStatus()
		{
			return mStatus;
		}
	private:
		int mTrigPin;
		int mEchoPin;
		int mStatus;
		unsigned long mLastMeasureTime;

		void measure();
};


#endif 

