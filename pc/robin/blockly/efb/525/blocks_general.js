var DigitalPins = [["→1₁", "1_1"], ["→1₂", "1_2"], ["→2₁", "2_1"], ["→2₂", "2_2"], ["→3₁", "3_1"], ["→3₂", "3_2"], ["→4₁", "4_1"], ["→4₂", "4_2"],
                   ["→5₁", "5_1"], ["→5₂", "5_2"], ["→6₁", "6_1"], ["→6₂", "6_2"], ["→7₁", "7_1"], ["→7₂", "7_2"], ["→8₁", "8_1"], ["→8₂", "8_2"]];
var AnalogInPins = [["→1₁", "1_1"],["→2₁", "2_1"], ["→3₁", "3_1"], ["→4₁", "4_1"], ["→5₁", "5_1"], ["→6₁", "6_1"], ["→7₁", "7_1"], ["→8₁", "8_1"]];
var AnalogOutPins = [["→1₂", "1_2"], ["→2₂", "2_2"], ["→3₂", "3_2"], ["→4₂", "4_2"], ["→5₂", "5_2"], ["→6₂", "6_2"], ["→7₂", "7_2"], ["→8₂", "8_2"]];
var DigitalStates = [["LOW", "LOW"], ["HIGH", "HIGH"]];

var SerialBaudrates = [["2400", "2400"], ["4800", "4800"], ["9600", "9600"], ["14400", "14400"], ["19200", "19200"], ["28800", "28800"], ["19200", "19200"], ["38400", "38400"], ["57600", "57600"], ["115200", "115200"]];
Blockly.Blocks['serial_baudrate'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(SerialBaudrates), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['serial_baudrate'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------- GENERAL DIGITAL IN BLOCKS -----------

Blockly.Blocks['digitalIn_pullup'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_digital_in1.png", 28, 28, "Digital IN"))
      .appendField(new Blockly.FieldDropdown(DigitalPins), "PIN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("turn on pullup resistor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Digital IN');
}};
///

Blockly.Blocks['digitalIn_when'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_digital_in1.png", 28, 28, "Digital IN"))
      .appendField(new Blockly.FieldDropdown(DigitalPins), "PIN")
      .appendField("when DI state changed to")
      .appendField(new Blockly.FieldDropdown(DigitalStates), "STATE");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Digital IN');
}};
///

Blockly.Blocks['digitalIn_is'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_digital_in1.png", 28, 28, "Digital IN"))
      .appendField(new Blockly.FieldDropdown(DigitalPins), "PIN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("DI state is")
      .appendField(new Blockly.FieldDropdown(DigitalStates), "STATE");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Digital IN');
}};
///

// ----------- GENERAL DIGITAL OUT BLOCKS -----------

Blockly.Blocks['digitalOut_set'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_digital_out1.png", 28, 28, "Digital OUT"))
      .appendField(new Blockly.FieldDropdown(DigitalPins), "PIN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set DO state to")
      .appendField(new Blockly.FieldDropdown(DigitalStates), "STATE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Digital OUT');
}};
///

// ----------- GENERAL ANALOG IN BLOCKS -----------

Blockly.Blocks['analogIn_when'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_analog_in1.png", 28, 28, "Analog IN"))
      .appendField(new Blockly.FieldDropdown(AnalogInPins), "PIN")
      .appendField("when AI value changed");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Analog IN');
}};
///

Blockly.Blocks['analogIn_get'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_analog_in1.png", 28, 28, "Analog IN"))
      .appendField(new Blockly.FieldDropdown(AnalogInPins), "PIN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("AI value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Analog IN');
}};
///

// ----------- GENERAL ANALOG OUT BLOCKS -----------

Blockly.Blocks['analogOut_set'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_analog_out1.png", 28, 28, "Analog OUT"))
      .appendField(new Blockly.FieldDropdown(AnalogOutPins), "PIN");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set AO value to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Analog OUT');
}};
///

// ----------- SERIAL COMMUNICATION BLOCKS -----------

Blockly.Blocks['serial_whenDataReceived'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_serial1.png", 28, 28, "Serial Communication"))
      .appendField(new Blockly.FieldDropdown(SerialPorts), "PORT")
      .appendField("when received serial message");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Serial Communication');
}};
///

Blockly.Blocks['serial_getDataReceived'] = {
init: function() {
    this.setColour(TextBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_serial1.png", 28, 28, "Serial Communication"))
      .appendField(new Blockly.FieldDropdown(SerialPorts), "PORT")
      .appendField("received serial message");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setTooltip('Serial Communication');
}};
///

Blockly.Blocks['serial_sendData'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_serial1.png", 28, 28, "Serial Communication"))
      .appendField(new Blockly.FieldDropdown(SerialPorts), "PORT");
    this.appendValueInput("DATA")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("send serial message");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Serial Communication');
}};
///

Blockly.Blocks['serial_setBaudrate'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_serial1.png", 28, 28, "Serial Communication"))
      .appendField(new Blockly.FieldDropdown(SerialPorts), "PORT");
    this.appendValueInput("BAUDRATE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set serial port baudrate");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Serial Communication');
}};