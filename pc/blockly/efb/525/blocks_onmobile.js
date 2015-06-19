
// ----------- ATTITUDE BLOCKS -----------

Blockly.Blocks['mobileAttitude_start'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_attitude.png", 28, 28, "Attitude Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start attitude sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Attitude Sensor');
}};
///

Blockly.Blocks['mobileAttitude_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_attitude.png", 28, 28, "Attitude Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop attitude sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Attitude Sensor');
}};
///

Blockly.Blocks['mobileAttitude_isStarted'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_attitude.png", 28, 28, "Attitude Sensor"))
      .appendField("attitude sensor is started");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Attitude Sensor');
}};
///

Blockly.Blocks['mobileAttitude_getPitch'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_attitude.png", 28, 28, "Attitude Sensor"))
      .appendField("pitch");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Attitude Sensor');
}};
///

Blockly.Blocks['mobileAttitude_getRoll'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_attitude.png", 28, 28, "Attitude Sensor"))
      .appendField("roll");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Attitude Sensor');
}};
///

Blockly.Blocks['mobileAttitude_getHeading'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_attitude.png", 28, 28, "Attitude Sensor"))
      .appendField("heading");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Attitude Sensor');
}};
///


// ----------- LOCATION BLOCKS -----------

Blockly.Blocks['mobileLocation_start'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start GPS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Location Sensor');
}};
///

Blockly.Blocks['mobileLocation_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop GPS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Location Sensor');
}};
///

Blockly.Blocks['mobileLocation_isStarted'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"))
      .appendField("GPS is started");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Location Sensor');
}};
///

Blockly.Blocks['mobileLocation_isReady'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"))
      .appendField("GPS is ready");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Location Sensor');
}};
///

Blockly.Blocks['mobileLocation_getLongitude'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"))
      .appendField("longitude");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Location Sensor');
}};
///

Blockly.Blocks['mobileLocation_getLatitude'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"))
      .appendField("latitude");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Location Sensor');
}};
///

Blockly.Blocks['mobileLocation_getAltitude'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_location.png", 28, 28, "Location Sensor"))
      .appendField("altitude");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Location Sensor');
}};
///

// ----------- QR CODE BLOCKS -----------

Blockly.Blocks['mobileQrCode_start'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_qrcode.png", 28, 28, "QR Code Reader"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start QR code reader");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('QR Code Reader');
}};
///

Blockly.Blocks['mobileQrCode_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_qrcode.png", 28, 28, "QR Code Reader"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop QR code reader");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('QR Code Reader');
}};
///

Blockly.Blocks['mobileQrCode_isStarted'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_qrcode.png", 28, 28, "QR Code Reader"))
      .appendField("QR code reader is started");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('QR Code Reader');
}};
///

Blockly.Blocks['mobileQrCode_whenCodeScanned'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_qrcode.png", 28, 28, "QR Code Reader"))
      .appendField("when scanned QR code")
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('QR Code Reader');
}};
///

Blockly.Blocks['mobileQrCode_getCode'] = {
init: function() {
    this.setColour(TextBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_qrcode.png", 28, 28, "QR Code Reader"))
      .appendField("QR code");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setTooltip('QR Code Reader');
}};
///

// ----------- COLOR SENSOR BLOCKS -----------

Blockly.Blocks['mobileColor_start'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_color.png", 28, 28, "Color Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start color sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Color Sensor');
}};
///

Blockly.Blocks['mobileColor_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_color.png", 28, 28, "Color Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop color sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Color Sensor');
}};
///

Blockly.Blocks['mobileColor_isStarted'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_color.png", 28, 28, "Color Sensor"))
      .appendField("color sensor is started");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Color Sensor');
}};
///

Blockly.Blocks['mobileColor_getColor'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_color.png", 28, 28, "Color Sensor"))
      .appendField("color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Color Sensor');
}};
///

// ----------- SOUND SENSOR BLOCKS -----------

Blockly.Blocks['mobileSound_start'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_sound.png", 28, 28, "Sound Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start sound sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sound Sensor');
}};
///

Blockly.Blocks['mobileSound_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_sound.png", 28, 28, "Sound Sensor"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop sound sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sound Sensor');
}};
///

Blockly.Blocks['mobileSound_isStarted'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_sound.png", 28, 28, "Sound Sensor"))
      .appendField("sound sensor is started");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Sound Sensor');
}};
///

Blockly.Blocks['mobileSound_getSoundDecibel'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_sound.png", 28, 28, "Sound Sensor"))
      .appendField("sound db");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Sound Sensor');
}};
///

// ----------- VOICE COMMANDER BLOCKS -----------

Blockly.Blocks['mobileVoice_start'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_voice.png", 28, 28, "Voice Commander"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start voice commander");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Voice Commander');
}};
///

Blockly.Blocks['mobileVoice_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_voice.png", 28, 28, "Voice Commander"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop voice commander");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Voice Commander');
}};
///

Blockly.Blocks['mobileVoice_isStarted'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_voice.png", 28, 28, "Voice Commander"))
      .appendField("voice commander is started");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Voice Commander');
}};
///

Blockly.Blocks['mobileVoice_whenCommandHeard'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_voice.png", 28, 28, "Voice Commander"))
      .appendField("when heard voice command")
      .appendField(new Blockly.FieldTextInput("hello"), "COMMAND");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Voice Commander');
}};
///

// ----------- SPEAKER BLOCKS -----------

Blockly.Blocks['mobileSpeaker_playSound'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("SOUNDFILE")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("play sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['mobileSpeaker_sayText'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("TEXT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("say text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['mobileSpeaker_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onmobile/icon_speaker.png", 28, 28, "Speaker"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///