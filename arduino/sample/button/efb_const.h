#ifndef __EFB_CONST_H__
#define __EFB_CONST_H__

#ifndef NULL
	#define NULL 0
#endif

#define EFB_HIGH	1
#define EFB_LOW		0

#define EFB_THREAD_REENTRANT	0x01
#define EFB_THREAD_SYNC			0X02
#define EFB_THREAD_NONREENT		0x03

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