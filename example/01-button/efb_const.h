#ifndef __EFB_CONST_H__
#define __EFB_CONST_H__

#ifndef NULL
	#define NULL 0
#endif

#define EFB_HIGH	1
#define EFB_LOW		0

typedef void(*EventCallback)(void);

struct EfbEvent
{
	EfbEvent(int devId=0, int eventType=0, int eventArg=0)
		:	deviceId(devId),
			type	(eventType),
			arg		(eventArg)
	{}
	int deviceId;
	int type;
	int arg;
};


#endif