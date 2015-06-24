.PHONY:	m128 m64 bootloader clean

m128:
	avr-g++ -mmcu=atmega128 test.cpp -o m128-off.out
	avr-objcopy -j .text -j .data -O ihex m128-off.out m128-off.hex
	avr-g++ -mmcu=atmega128 test.cpp -DTEST_ON -o m128-on.out
	avr-objcopy -j .text -j .data -O ihex m128-on.out m128-on.hex

m64:
	avr-g++ -mmcu=atmega64 test.cpp -o m64-off.out
	avr-objcopy -j .text -j .data -O ihex m64-off.out m64-off.hex
	avr-g++ -mmcu=atmega64 test.cpp -DTEST_ON -o m64-on.out
	avr-objcopy -j .text -j .data -O ihex m64-on.out m64-on.hex

bootloader:
	avr-gcc -g -Wall -O2 -mmcu=atmega128  -DF_CPU=16000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600    -c stk500_bootloader.c -o bt-m128-16mhz.o
	avr-gcc -g -Wall -O2 -mmcu=atmega128  -DF_CPU=16000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600  -Wl,--section-start=.text=0xFC00 bt-m128-16mhz.o -o bt-m128-16mhz.elf
	avr-objcopy -j .text -j .data -O ihex bt-m128-16mhz.elf bt-m128-16mhz.hex

	avr-gcc -g -Wall -O2 -mmcu=atmega128  -DF_CPU=4000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600    -c stk500_bootloader.c -o bt-m128-4mhz.o
	avr-gcc -g -Wall -O2 -mmcu=atmega128  -DF_CPU=4000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600  -Wl,--section-start=.text=0xFC00 bt-m128-4mhz.o -o bt-m128-4mhz.elf
	avr-objcopy -j .text -j .data -O ihex bt-m128-4mhz.elf bt-m128-4mhz.hex

	avr-gcc -g -Wall -O2 -mmcu=atmega128  -DF_CPU=16000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600    -c stk500_bootloader.c -o bt-m64-16mhz.o
	avr-gcc -g -Wall -O2 -mmcu=atmega64  -DF_CPU=16000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600  -Wl,--section-start=.text=0x7C00 bt-m64-16mhz.o -o bt-m64-16mhz.elf
	avr-objcopy -j .text -j .data -O ihex bt-m64-16mhz.elf bt-m64-16mhz.hex
	
	avr-gcc -g -Wall -O2 -mmcu=atmega128  -DF_CPU=4000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600    -c stk500_bootloader.c -o bt-m64-4mhz.o
	avr-gcc -g -Wall -O2 -mmcu=atmega64  -DF_CPU=4000000L   '-DMAX_TIME_COUNT=F_CPU>>4' '-DNUM_LED_FLASHES=1' -DBAUD_RATE=57600  -Wl,--section-start=.text=0x7C00 bt-m64-4mhz.o -o bt-m64-4mhz.elf
	avr-objcopy -j .text -j .data -O ihex bt-m64-4mhz.elf bt-m64-4mhz.hex

clean:
	rm -rf a.out
	rm -rf m128-on.out
	rm -rf m128-on.hex
	rm -rf m128-off.out
	rm -rf m128-off.hex
	rm -rf m64-on.out
	rm -rf m64-on.hex
	rm -rf m64-off.out
	rm -rf m64-off.hex
	rm -rf bt-m128-16mhz.o
	rm -rf bt-m128-16mhz.elf
	rm -rf bt-m128-16mhz.hex

	rm -rf bt-m128-4mhz.o
	rm -rf bt-m128-4mhz.elf
	rm -rf bt-m128-4mhz.hex
	
	rm -rf bt-m64-16mhz.o
	rm -rf bt-m64-16mhz.elf
	rm -rf bt-m64-16mhz.hex
	
	rm -rf bt-m64-4mhz.o
	rm -rf bt-m64-4mhz.elf
	rm -rf bt-m64-4mhz.hex
	
