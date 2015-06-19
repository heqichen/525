var TouchKeyNumbers = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]];
Blockly.Blocks['touchKey_number'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(TouchKeyNumbers), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['touchKey_number'] = function(block) {
    var dropdown_num = block.getFieldValue('NUM');
    var code = dropdown_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var DistanceUnits = [["meters", "M"], ["feet", "F"], ["inches", "I"]];
var TemperatureDegreeUnits = [["ºC", "C"], ["ºF", "F"]];

// ----------- ULTRASONIC BLOCKS -----------

Blockly.Blocks['ultrasonic_whenDistanceChanged'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ultrasonic1.png", 28, 28, "Ultrasonic Ranger"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when ultrasonic ranging changed");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Ultrasonic Ranger');
}};
///

Blockly.Blocks['ultrasonic_whenDistanceLessThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ultrasonic1.png", 28, 28, "Ultrasonic Ranger"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when ultrasonic ranging <")
      .appendField(new Blockly.FieldTextInput("0.5"), "DISTANCE")
      .appendField(new Blockly.FieldDropdown(DistanceUnits), "UNIT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Ultrasonic Ranger');
}};
///

Blockly.Blocks['ultrasonic_whenDistanceGreaterThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ultrasonic1.png", 28, 28, "Ultrasonic Ranger"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when ultrasonic ranging >")
      .appendField(new Blockly.FieldTextInput("1.5"), "DISTANCE")
      .appendField(new Blockly.FieldDropdown(DistanceUnits), "UNIT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Ultrasonic Ranger');
}};
///

Blockly.Blocks['ultrasonic_getDistance'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ultrasonic1.png", 28, 28, "Ultrasonic Ranger"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("ultrasonic ranging")
      .appendField(new Blockly.FieldDropdown(DistanceUnits), "UNIT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Ultrasonic Sensor');
}};
///

// ----------- PIR MOTION DETECTOR BLOCKS -----------

Blockly.Blocks['pirMotion_whenBodyMoved'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_pir_motion1.png", 28, 28, "PIR Motion Detector"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when detected body motion");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('PIR Motion Detector');
}};
///

Blockly.Blocks['pirMotion_isBodyMoved'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_pir_motion1.png", 28, 28, "PIR Motion Detector"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("body motion is detected");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('PIR Motion Detector');
}};
///

// ----------- IR RECEIVER BLOCKS -----------

Blockly.Blocks['irReceiver_whenDataReceived'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ir_receiver1.png", 28, 28, "Infrared Receiver"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when received IR data");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Infrared Receiver');
}};
///

Blockly.Blocks['irReceiver_getDataReceived'] = {
init: function() {
    this.setColour(TextBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ir_receiver1.png", 28, 28, "Infrared Receiver"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("received IR data");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setTooltip('Infrared Receiver');
}};
///

// ----------- IR EMITTER BLOCKS -----------

Blockly.Blocks['irEmitter_sendData'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_ir_emitter1.png", 28, 28, "Infrared Emitter"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT");
    this.appendValueInput("DATA")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("send IR data");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Infrared Emitter');
}};
///

// ----------- TOUCH KEY BLOCKS -----------

Blockly.Blocks['touchKey_whenTouched'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_touch_key1.png", 28, 28, "Touch Key"))
      .appendField(new Blockly.FieldDropdown(I2CPorts), "PORT")
      .appendField("when touched key")
      .appendField(new Blockly.FieldDropdown(TouchKeyNumbers), "NUM");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Touch Key');
}};
///

Blockly.Blocks['touchKey_whenReleased'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_touch_key1.png", 28, 28, "Touch Key"))
      .appendField(new Blockly.FieldDropdown(I2CPorts), "PORT")
      .appendField("when released key")
      .appendField(new Blockly.FieldDropdown(TouchKeyNumbers), "NUM");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Touch Key');
}};
///

Blockly.Blocks['touchKey_isTouched'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_touch_key1.png", 28, 28, "Touch Key"))
      .appendField(new Blockly.FieldDropdown(I2CPorts), "PORT");
    this.appendValueInput("KEY")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("key");
    this.appendDummyInput()
      .appendField("is touched");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Touch Key');
}};
///

// ----------- LIGHT BLOCKS -----------

Blockly.Blocks['light_whenLightIntensityChanged'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_light1.png", 28, 28, "Light Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when light intensity changed");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Light Sensor');
}};
///

Blockly.Blocks['light_whenLightIntensityLessThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_light1.png", 28, 28, "Light Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when light intensity <")
      .appendField(new Blockly.FieldTextInput("50"), "LIGHT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Light Sensor');
}};
///

Blockly.Blocks['light_whenLightIntensityGreaterThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_light1.png", 28, 28, "Light Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when light intensity >")
      .appendField(new Blockly.FieldTextInput("50"), "LIGHT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Light Sensor');
}};
///

Blockly.Blocks['light_getLightIntensity'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_light1.png", 28, 28, "Light Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("light intensity");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Light Sensor');
}};
///

// ----------- TEMPERATURE BLOCKS -----------

Blockly.Blocks['temperature_whenTemperatureChanged'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_temperature1.png", 28, 28, "Temperature Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when temperaturey changed");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Temperature Sensor');
}};
///

Blockly.Blocks['temperature_whenTemperatureLessThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_temperature1.png", 28, 28, "Temperature Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when temperaturey <")
      .appendField(new Blockly.FieldTextInput("20"), "TEMPERATURE")
      .appendField(new Blockly.FieldDropdown(TemperatureDegreeUnits), "UNIT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Temperature Sensor');
}};
///

Blockly.Blocks['temperature_whenTemperatureGreaterThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_temperature1.png", 28, 28, "Temperature Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when temperature >")
      .appendField(new Blockly.FieldTextInput("20"), "TEMPERATURE")
      .appendField(new Blockly.FieldDropdown(TemperatureDegreeUnits), "UNIT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Temperature Sensor');
}};
///

Blockly.Blocks['temperature_getTemperature'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_temperature1.png", 28, 28, "Temperature Sensor"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("temperature")
      .appendField(new Blockly.FieldDropdown(TemperatureDegreeUnits), "UNIT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Temperature Sensor');
}};
///

// ----------- ENCODER BLOCKS -----------

Blockly.Blocks['encoder_whenValueChanged'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_encoder1.png", 28, 28, "Encoder"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when encoder value changed");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Encoder');
}};
///

Blockly.Blocks['encoder_whenValueLessThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_encoder1.png", 28, 28, "Encoder"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when encoder value <")
      .appendField(new Blockly.FieldTextInput("0"), "VALUE");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Encoder');
}};
///

Blockly.Blocks['encoder_whenValueGreaterThan'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_encoder1.png", 28, 28, "Encoder"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("when encoder value >")
      .appendField(new Blockly.FieldTextInput("0"), "VALUE");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Encoder');
}};
///

Blockly.Blocks['encoder_getValue'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_encoder1.png", 28, 28, "Encoder"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT")
      .appendField("encoder value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Encoder');
}};
///

Blockly.Blocks['encoder_reset'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/sensors/icon_encoder1.png", 28, 28, "Encoder"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("reset encoder");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Encoder');
}};
///