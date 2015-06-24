#ifdef __AVR_ATmega128__
	#warning ("mega128")
	#define PORTC	(*(volatile unsigned char *)0x35)
	#define DDRC	(*(volatile unsigned char *)0x34)
#endif
#ifdef __AVR_ATmega64__
	#warning ("mega64")
	#define PORTC	(*(volatile unsigned char *)0x35)
	#define DDRC	(*(volatile unsigned char *)0x34)
#endif

#ifdef TEST_ON
	#define targetStatus 0xFF
	#warning ("target OONN")
#else
	#define targetStatus 0x00
	#warning ("target OOFFFF")
#endif


int main()
{
	while (true)
	{
		DDRC = 0xFF;
		PORTC = targetStatus;
	}
	return 0;
}
