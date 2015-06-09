#ifndef __EFB_CONST_H__
#define __EFB_CONST_H__

#include "efb_device.h"

#ifndef NULL
	#define NULL 0
#endif

#define EFB_HIGH	1
#define EFB_LOW		0

typedef void(*EventCallback)(void);

struct EfbEvent
{
	EfbEvent(EfbDevice* efbDevice=NULL, int eventType=0, int eventArg=0)
		:	device(efbDevice),
			type	(eventType),
			arg		(eventArg)
	{}
	EfbDevice *device;
	int type;
	int arg;
};


#endif