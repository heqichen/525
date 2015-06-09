#ifndef __EFB_EVENT_QUEUE_H__
#define __EFB_EVENT_QUEUE_H__

#include "efb_const.h"

class EfbEventQueue
{
	public:
		EfbEventQueue();
		void push(EfbEvent event);
		EfbEvent pop();

	private:
		EfbEvent mEvent;

};


#endif