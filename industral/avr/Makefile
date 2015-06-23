.PHONY:	m128 clean

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