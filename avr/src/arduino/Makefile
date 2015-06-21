.PHONY:	clean main

#LD_FLAGS=-Wl,-Map,main.map

PREFIX=./toolchain/amd64/bin


CC=$(PREFIX)/avr-gcc
CPP=$(PREFIX)/avr-g++
LD=$(PREFIX)/avr-gcc
OBJCPY=$(PREFIX)/avr-objcopy


CFLAGS=-DF_CPU=16000000UL -O2
INC=-I./toolchain/avr-libc-1.8.1/include
INC+=-I./avr-libc
INC+=-I./





main:
	# compile
	#$(CC) -mmcu=atmega2560 -Iavr-libc/include blink.c -c -o blink.o

	$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c WInterrupts.c -o WInterrupts.o
	$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring.c -o wiring.o
	$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_analog.c -o wiring_analog.o
	$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_digital.c -o wiring_digital.o
	$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_pulse.c -o wiring_pulse.o
	$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_shift.c -o wiring_shift.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c CDC.cpp -o CDC.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c HardwareSerial.cpp -o HardwareSerial.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c HID.cpp -o HID.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c IPAddress.cpp -o IPAddress.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c main.cpp -o main.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c new.cpp -o new.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c Print.cpp -o Print.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c Stream.cpp -o Stream.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c Tone.cpp -o Tone.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c USBCore.cpp -o USBCore.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c WMath.cpp -o WMath.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c WString.cpp -o WString.o


	# link
	#$(LD) -mmcu=atmega2560 $(LD_FLAGS) blink.o -o out.elf
	# generate flash ihex
	#$(OBJCPY) -j .text -j .data -O ihex out.elf out.hex
	# generate eeprom ihex
	#$(OBJCPY) -j .eeprom -O ihex --set-section-flags=.eeprom=alloc,load --no-change-warnings --change-section-lma .eeprom=0 out.elf out.eep
	#download 
	#avrdude -c stk500 -P /dev/ttyACM0 -Uflash:w:out.hex -p m2560
clean:
	rm -f a.out
	rm -f main
	rm -f main.o
	rm -f out.elf
	rm -f main.map
	rm -f out.hex
	rm -f out.eep
	rm -f WInterrupts.o
	rm -f wiring.o
	rm -f wiring_analog.o
	rm -f wiring_digital.o
	rm -f wiring_pulse.o
	rm -f wiring_shift.o
	rm -f CDC.o
	rm -f HardwareSerial.o
	rm -f HID.o
	rm -f IPAddress.o
	rm -f main.o
	rm -f new.o
	rm -f Print.o
	rm -f Stream.o
	rm -f Tone.o
	rm -f USBCore.o
	rm -f WMath.o
	rm -f WString.o