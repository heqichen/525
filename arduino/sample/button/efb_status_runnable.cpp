#include "efb_status_runnable.h"

EfbStatusRunnable::EfbStatusRunnable(EventCallback cb)
	:	EfbRunnable(cb, EFB_THREAD_SYNC)
{

}