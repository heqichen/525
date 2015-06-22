#ifndef __EFB_EVENT_QUEUE_H__
#define __EFB_EVENT_QUEUE_H__

#include "efb_const.h"
#include "circle_list.h"

class EfbEventQueue : private CircleList<EfbEvent>
{
	public:
		EfbEventQueue();
		void push(EfbEvent event);
		EfbEvent pop();
		bool available();

	private:
		EfbEvent mEvent;

};


#endif