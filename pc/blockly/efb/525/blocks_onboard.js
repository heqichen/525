
var DisplayFontSizes = [["1 regular", "1"], ["2 bold", "2"], ["3 large", "3"]];
Blockly.Blocks['display_fontsize'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(DisplayFontSizes), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['display_fontsize'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var ButtonNumbers = [["1 center", "1"], ["2 left", "2"], ["3 right", "3"], ["4 up", "4"], ["5 down", "5"]];
Blockly.Blocks['button_number'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(ButtonNumbers), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['button_number'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var ImageFiles = [["file 1", "1"], ["file 2", "2"], ["file 3", "3"], ["file 4", "4"], ["file 5", "5"], ["file 6", "6"], ["file 7", "7"], ["file 8", "8"], ["file 9", "9"]];
Blockly.Blocks['image_file'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(ImageFiles), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['image_file'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var SoundFiles = [["file 1", "1"], ["file 2", "2"], ["file 3", "3"], ["file 4", "4"], ["file 5", "5"], ["file 6", "6"], ["file 7", "7"], ["file 8", "8"], ["file 9", "9"]];
Blockly.Blocks['sound_file'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(SoundFiles), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['sound_file'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var SoundNotes = [["C4", "C4"], ["C4#", "C4S"], ["D4", "D4"], ["D4#", "D4S"], ["E4", "E4"], ["F4", "F4"], ["F4#", "F4S"], ["G4", "G4"], ["G4#", "G4S"], ["A4", "A4"], ["A4#", "A4S"], ["B4", "B4"],
                  ["C5", "C5"], ["C5#", "C5S"], ["D5", "D5"], ["D5#", "D5S"], ["E5", "E5"], ["F5", "F5"], ["F5#", "F5S"], ["G5", "G5"], ["G5#", "G5S"], ["A5", "A5"], ["A5#", "A5S"], ["B5", "B5"],
                  ["C6", "C6"], ["C6#", "C6S"], ["D6", "D6"], ["D6#", "D6S"], ["E6", "E6"], ["F6", "F6"], ["F6#", "F6S"], ["G6", "G6"], ["G6#", "G6S"], ["A6", "A6"], ["A6#", "A6S"], ["B6", "B6"]];
Blockly.Blocks['sound_note'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(SoundNotes), "TEXT");
    this.setOutput(true, "Text");
    this.setTooltip('');
}};
Blockly.JavaScript['sound_note'] = function(block) {
    var dropdown_text = block.getFieldValue('TEXT');
    var code = dropdown_text;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var WirelessChannels = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]];
Blockly.Blocks['wireless_channel'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(WirelessChannels), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['wireless_channel'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var TimerNumbers = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"]];

// ----------- DISPLAY BLOCKS -----------

Blockly.Blocks['display_clearScreen'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_display.png", 28, 28, "Display"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("clear screen");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Display');
}};
///

Blockly.Blocks['display_drawText'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_display.png", 28, 28, "Display"));
    this.appendValueInput("TEXT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("draw text");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.appendValueInput("FONTSIZE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("font");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Display');
}};
///

Blockly.Blocks['display_drawLine'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_display.png", 28, 28, "Display"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("draw line");
    this.appendValueInput("X1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y1");
    this.appendValueInput("X2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x2");
    this.appendValueInput("Y2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y2");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Display');
}};
///

Blockly.Blocks['display_drawRectangle'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_display.png", 28, 28, "Display"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("draw rectangle");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("width");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("height");
    this.appendValueInput("FILL")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("fill");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Display');
}};
///

Blockly.Blocks['display_drawCircle'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_display.png", 28, 28, "Display"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("draw circle");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y");
    this.appendValueInput("RADIUS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("radius");
    this.appendValueInput("FILL")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("fill");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Display');
}};
///

Blockly.Blocks['display_drawImage'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_display.png", 28, 28, "Display"));
    this.appendValueInput("IMAGEFILE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("draw picture");
    this.appendValueInput("INVERT")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("invert");
    this.appendValueInput("TRANSPARENT")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("transparent");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Display');
}};
///

// ----------- BUTTON BLOCKS -----------
Blockly.Blocks['button_whenPressed'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_buttons.png", 28, 28, "Button"))
      .appendField("when pressed button")
      .appendField(new Blockly.FieldDropdown(ButtonNumbers), "NUM");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Button');
}};
///

Blockly.Blocks['button_whenReleased'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_buttons.png", 28, 28, "Button"))
      .appendField("when released button")
      .appendField(new Blockly.FieldDropdown(ButtonNumbers), "NUM");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Button');
}};
///

Blockly.Blocks['button_isPressed'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_buttons.png", 28, 28, "Button"));
    this.appendValueInput("BUTTON")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("button");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Button');
}};
///

Blockly.Blocks['button_isReleased'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_buttons.png", 28, 28, "Button"));
    this.appendValueInput("BUTTON")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("button");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("is released");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Button');
}};
///


// ----------- LIGHT BLOCKS -----------

Blockly.Blocks['statusLight_setColor'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_light.png", 28, 28, "Status Light"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set status light");
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.appendValueInput("BLINK")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("blink");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Status Light');
}};
///

Blockly.Blocks['statusLight_off'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_light.png", 28, 28, "Status Light"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("light off");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Status Light');
}};
///

// ----------- SPEAKER BLOCKS -----------

Blockly.Blocks['speaker_playTone'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("FREQUENCY")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("play tone");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Hz");
    this.appendValueInput("VOLUME")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("volume");
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['speaker_playNote'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("NOTE")
      .setCheck("Text")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("play note");
    this.appendValueInput("VOLUME")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("volume");
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['speaker_playSound'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("SOUNDFILE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("play sound");
    this.appendValueInput("VOLUME")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("volume");
    this.appendValueInput("WAIT")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("wait");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['speaker_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

// ----------- TIMER BLOCKS -----------

Blockly.Blocks['timer_reset'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_timer.png", 28, 28, "Timer"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("reset timer")
      .appendField(new Blockly.FieldDropdown(TimerNumbers), "TIMER");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Timer');
}};
///

Blockly.Blocks['timer_getElapsedSeconds'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_timer.png", 28, 28, "Timer"))
      .appendField("timer")
      .appendField(new Blockly.FieldDropdown(TimerNumbers), "TIMER")
      .appendField("elapsed seconds");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Timer');
}};
///

// ----------- WIRELESS MESSAGER BLOCKS -----------

Blockly.Blocks['wireless_whenDataReceived'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_messager.png", 28, 28, "Wireless Messager"))
      .appendField("when received wireless message");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Wireless Messager');
}};
///

Blockly.Blocks['wireless_getDataReceived'] = {
init: function() {
    this.setColour(TextBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_messager.png", 28, 28, "Wireless Messager"))
      .appendField("received wireless message");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setTooltip('Wireless Messager');
}};
///

Blockly.Blocks['wireless_sendData'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_messager.png", 28, 28, "Wireless Messager"));
    this.appendValueInput("DATA")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("send wireless message");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Wireless Messager');
}};
///

Blockly.Blocks['wireless_setChannel'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/onboard/icon_messager.png", 28, 28, "Wireless Messager"));
    this.appendValueInput("CHANNEL")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set wireless channel");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Wireless Messager');
}};
///