.PHONY:	clean main

#LD_FLAGS=-Wl,-Map,main.map

main:
	# compile
	avr-gcc -mmcu=atmega2560 main.c -c -o main.o
	# link
	avr-gcc -mmcu=atmega2560 $(LD_FLAGS) main.o -o out.elf
	# generate flash ihex
	avr-objcopy -j .text -j .data -O ihex out.elf out.hex
	# generate eeprom ihex
	avr-objcopy -j .eeprom -O ihex --set-section-flags=.eeprom=alloc,load --no-change-warnings --change-section-lma .eeprom=0 out.elf out.eep
	#download 
	avrdude -c stk500 -P /dev/ttyACM1 -Uflash:w:out.hex -p m2560
clean:
	rm -f a.out
	rm -f main
	rm -f main.o
	rm -f out.elf
	rm -f main.map
	rm -f out.hex
	rm -f out.eep