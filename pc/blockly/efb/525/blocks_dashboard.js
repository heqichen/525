
var WidgetIdNumbers = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], 
                ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], 
                ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], 
                ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"]];

var DashboardJoystickDirections = [["left", "L"], ["right", "R"], ["top", "T"], ["bottom", "B"], ["center", "C"]];

var CanvasFontSizes = [["1 regular", "1"], ["2 bold", "2"], ["3 large", "3"]];
Blockly.Blocks['canvas_fontsize'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(DisplayFontSizes), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['canvas_fontsize'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------- JOY STICK BLOCKS -----------
Blockly.Blocks['dashboardJoystick_whenMoved'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"))
      .appendField("when moved joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_whenMovedTo'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"))
      .appendField("when moved joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("to")
      .appendField(new Blockly.FieldDropdown(DashboardJoystickDirections), "DIRECTION");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_getX'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"))
      .appendField("joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("x-axis value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_getY'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"))
      .appendField("joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("y-axis value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_whenPressed'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"))
      .appendField("when pressed joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_whenReleased'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"))
      .appendField("when released joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_isPressed'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Joystick');
}};
///

Blockly.Blocks['dashboardJoystick_isReleased'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_joystick.png", 28, 28, "Joystick"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("joystick")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("is released");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Joystick');
}};
///

// ----------- BUTTON BLOCKS -----------
Blockly.Blocks['dashboardButton_whenPressed'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_button.png", 28, 28, "Button"))
      .appendField("when pressed button")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Button');
}};
///

Blockly.Blocks['dashboardButton_whenReleased'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_button.png", 28, 28, "Button"))
      .appendField("when released button")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Button');
}};
///

Blockly.Blocks['dashboardButton_isPressed'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_button.png", 28, 28, "Button"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("button")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Button');
}};
///

Blockly.Blocks['dashboardButton_isReleased'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_button.png", 28, 28, "Button"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("button")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("is released");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Button');
}};
///

// ----------- SWITCH / CHECKBOX BLOCKS -----------
Blockly.Blocks['dashboardSwitch_whenChanged'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_switch.png", 28, 28, "Switch"))
      .appendField("when changed switch")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("state");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Switch');
}};
///

Blockly.Blocks['dashboardSwitch_isOn'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_switch.png", 28, 28, "Switch"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("switch")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("is ON");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Button');
}};
///

Blockly.Blocks['dashboardSwitch_isOff'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_switch.png", 28, 28, "Switch"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("switch")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("is OFF");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Button');
}};
///

Blockly.Blocks['dashboardSwitch_setOn'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_switch.png", 28, 28, "Switch"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set switch")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("to ON");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Switch');
}};
///

Blockly.Blocks['dashboardSwitch_setOff'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_switch.png", 28, 28, "Switch"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set switch")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("to OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Switch');
}};
///

// ----------- SLIDER BLOCKS -----------
Blockly.Blocks['dashboardSlider_whenMoved'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_slider.png", 28, 28, "Slider"))
      .appendField("when moved slider")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Slider');
}};
///

Blockly.Blocks['dashboardSlider_getValue'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_slider.png", 28, 28, "Slider"))
      .appendField("slider")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Slider');
}};
///

Blockly.Blocks['dashboardSlider_setValue'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_slider.png", 28, 28, "Slider"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set slider")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("value to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Slider');
}};
///

// ----------- TUNER BLOCKS -----------
Blockly.Blocks['dashboardTuner_whenMoved'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_tuner.png", 28, 28, "Tuner"))
      .appendField("when moved tuner")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Tuner');
}};
///

Blockly.Blocks['dashboardTuner_getValue'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_tuner.png", 28, 28, "Tuner"))
      .appendField("tuner")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID")
      .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Tuner');
}};
///

Blockly.Blocks['dashboardTuner_setValue'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_tuner.png", 28, 28, "Tuner"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set tuner")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("value to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Tuner');
}};
///

// ----------- PROGRESS BAR BLOCKS -----------
Blockly.Blocks['dashboardProgress_setValue'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_progress.png", 28, 28, "Progress Bar"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set progress bar")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("value to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Progress Bar');
}};
///

// ----------- TEXT FIELD BLOCKS -----------
Blockly.Blocks['dashboardText_setText'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_text.png", 28, 28, "Text Field"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set text field")
      .appendField(new Blockly.FieldDropdown(WidgetIdNumbers), "ID");
    this.appendValueInput("TEXT")
      .setCheck("Text")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Text Field');
}};
///

// ----------- CANVAS BLOCKS -----------

Blockly.Blocks['dashboardCanvas_clear'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_canvas.png", 28, 28, "Canvas"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("clear canvas");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Canvas');
}};
///

Blockly.Blocks['dashboardCanvas_drawText'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_canvas.png", 28, 28, "Canvas"));
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
      .setCheck("Colour")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.appendValueInput("FONTSIZE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("font");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Canvas');
}};
///

Blockly.Blocks['dashboardCanvas_drawLine'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_canvas.png", 28, 28, "Canvas"));
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
      .setCheck("Colour")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Canvas');
}};
///

Blockly.Blocks['dashboardCanvas_drawRectangle'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_canvas.png", 28, 28, "Canvas"));
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
      .setCheck("Colour")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Canvas');
}};
///

Blockly.Blocks['dashboardCanvas_drawCircle'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_canvas.png", 28, 28, "Canvas"));
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
      .setCheck("Colour")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Canvas');
}};
///

Blockly.Blocks['dashboardCanvas_drawImage'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_canvas.png", 28, 28, "Canvas"));
    this.appendValueInput("IMAGEFILE")
      .setCheck("Text")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("draw picture");
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
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Canvas');
}};
///

// ----------- SPEAKER BLOCKS -----------

Blockly.Blocks['dashboardSpeaker_playSound'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("SOUNDFILE")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("play sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['dashboardSpeaker_sayText'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendValueInput("TEXT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("say text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///

Blockly.Blocks['dashboardSpeaker_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/dashboard/icon_speaker.png", 28, 28, "Speaker"));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Speaker');
}};
///