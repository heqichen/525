#!/bin/bash



PREFIX=./toolchain/amd64/bin
CC=$PREFIX/avr-gcc
OBJCPY=$PREFIX/avr-objcopy


$CC -mmcu=atmega2560 -g -I./toolchain/avr-libc-1.8.1/include/ blink.c -c -o blink.o
# link
$CC -mmcu=atmega2560 -g -L./toolchain/avr-libc-1.8.1/lib2560/ blink.o -o out.elf
# generate flash ihex
$OBJCPY -j .text -j .data -O ihex out.elf out.hex
# generate eeprom ihex
$OBJCPY -j .eeprom -O ihex --set-section-flags=.eeprom=alloc,load --no-change-warnings --change-section-lma .eeprom=0 out.elf out.eep
