.PHONY:	clean main

#LD_FLAGS=-Wl,-Map,main.map

PREFIX=./toolchain/amd64/bin
ARDUINO=toolchain/arduino-1.0.5

CC=$(PREFIX)/avr-gcc
CPP=$(PREFIX)/avr-g++
LD=$(PREFIX)/avr-gcc
OBJCPY=$(PREFIX)/avr-objcopy
AR=$(PREFIX)/avr-ar


CFLAGS=-DF_CPU=16000000UL -O2
INC=-I./toolchain/avr-libc-1.8.1/include
INC+=-I./avr-libc
INC+=-I./
INC+=-I$(ARDUINO)/include

LD_FLAGS=-L./toolchain/avr-libc-1.8.1/lib2560




OBJS=$(ARDUINO)/objs/CDC.o
OBJS+=$(ARDUINO)/objs/HardwareSerial.o
OBJS+=$(ARDUINO)/objs/HID.o
OBJS+=$(ARDUINO)/objs/IPAddress.o
OBJS+=$(ARDUINO)/objs/main.o
OBJS+=$(ARDUINO)/objs/new.o
OBJS+=$(ARDUINO)/objs/Print.o
OBJS+=$(ARDUINO)/objs/Stream.o
OBJS+=$(ARDUINO)/objs/Tone.o
OBJS+=$(ARDUINO)/objs/USBCore.o
OBJS+=$(ARDUINO)/objs/WInterrupts.o
OBJS+=$(ARDUINO)/objs/wiring.o
OBJS+=$(ARDUINO)/objs/wiring_analog.o
OBJS+=$(ARDUINO)/objs/wiring_digital.o
OBJS+=$(ARDUINO)/objs/wiring_pulse.o
OBJS+=$(ARDUINO)/objs/wiring_shift.o
OBJS+=$(ARDUINO)/objs/WMath.o
OBJS+=$(ARDUINO)/objs/WString.o



main:
	# compile
	#$(CC) -mmcu=atmega2560 -Iavr-libc/include blink.c -c -o blink.o

	#$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c WInterrupts.c -o WInterrupts.o
	#$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring.c -o wiring.o
	#$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_analog.c -o wiring_analog.o
	#$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_digital.c -o wiring_digital.o
	#$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_pulse.c -o wiring_pulse.o
	#$(CC) -mmcu=atmega2560 $(CFLAGS) $(INC) -c wiring_shift.c -o wiring_shift.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c CDC.cpp -o CDC.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c HardwareSerial.cpp -o HardwareSerial.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c HID.cpp -o HID.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c IPAddress.cpp -o IPAddress.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c main.cpp -o main.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c new.cpp -o new.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c Print.cpp -o Print.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c Stream.cpp -o Stream.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c Tone.cpp -o Tone.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c USBCore.cpp -o USBCore.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c WMath.cpp -o WMath.o
	#$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c WString.cpp -o WString.o
	$(CPP) -mmcu=atmega2560 $(CFLAGS) $(INC) -c arduino_test.cpp -o arduino_test.o





	# link
	#$(LD) -mmcu=atmega2560 $(LD_FLAGS) blink.o -o out.elf


	$(LD) -mmcu=atmega2560 $(LD_FLAGS) $(OBJS) arduino_test.o -o out.elf
	#$(LD) -mmcu=atmega2560 $(LD_FLAGS) -L./ -lardumega2560 arduino_test.o -o out.elf



	# generate flash ihex
	$(OBJCPY) -j .text -j .data -O ihex out.elf out.hex
	# generate eeprom ihex
	$(OBJCPY) -j .eeprom -O ihex --set-section-flags=.eeprom=alloc,load --no-change-warnings --change-section-lma .eeprom=0 out.elf out.eep
	#download 
	avrdude -c stk500 -P /dev/ttyACM0 -Uflash:w:out.hex -p m2560


library:
	
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/CDC.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/HardwareSerial.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/HID.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/IPAddress.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/main.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/new.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/Print.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/Stream.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/Tone.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/USBCore.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/WInterrupts.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/wiring.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/wiring_analog.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/wiring_digital.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/wiring_pulse.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/wiring_shift.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/WMath.o
	$(AR) rcs libardumega2560.a $(ARDUINO)/objs/WString.o


clean:
	rm -f a.out
	rm -f main
	rm -f main.o
	rm -f out.elf
	rm -f main.map
	rm -f out.hex
	rm -f out.eep
