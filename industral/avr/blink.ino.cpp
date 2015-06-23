#include <Arduino.h>
#include <avr/io.h>



void setup()
{
	Serial.begin(9600);
	pinMode(13, OUTPUT);

	asm("\
		ldi r16, 0x01\n\
		sts 0x45, r16\n\
		ldi r16, 0x00\n\
		sts 0x44, r16\n\
		");
	//TCCR0 = 5;
	TCNT0 = 0;
}

void loop()
{
	//digitalWrite(13, HIGH);
	//delay(500);
	//digitalWrite(13, LOW);
	//delay(500);
	//digitalWrite(13, HIGH);
	asm("ldi r16, 0xff\n\
		sts 0x25, r16");
	int oCount = 0;
	bool ledStatus = true;
	while (true)
	{
		//Serial.println(TCNT0);
		if (TCNT0 > 200)
		{
			TCNT0 = 0;
			++oCount;
			if (oCount > 20)
			{
				oCount = 0;
				if (ledStatus)
				{
					//digitalWrite(13, HIGH);
					asm("ldi r16, 0xff\n\
						sts 0x25, r16");
					ledStatus = false;
				}
				else
				{
					//digitalWrite(13, LOW);
					asm("ldi r16, 0x00\n\
						sts 0x25, r16"::);
					ledStatus = true;
					//Serial.println(analogRead(A0));
				}
				//Serial.println(ledStatus);
			}

		}
	}

}
