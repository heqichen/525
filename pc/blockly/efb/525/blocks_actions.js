
// ----------- DC MOTOR BLOCKS -----------

Blockly.Blocks['dcMotor_rotate'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_dc.png", 28, 28, "DC Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate motor with power");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('DC Motor');
}};
///

Blockly.Blocks['dcMotor_rotateForSeconds'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_dc.png", 28, 28, "DC Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate motor with power");
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("for seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('DC Motor');
}};
///

Blockly.Blocks['dcMotor_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_dc.png", 28, 28, "DC Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop motor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('DC Motor');
}};
///

// ----------- SERVO BLOCKS -----------

Blockly.Blocks['servo_rotate'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_servo.png", 28, 28, "Servo"))
      .appendField(new Blockly.FieldDropdown(SensorPorts), "PORT");
    this.appendValueInput("DEGREES")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate servo to angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Servo');
}};
///

// ----------- NXT MOTOR BLOCKS -----------

Blockly.Blocks['nxtMotor_rotate'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_nxt.png", 28, 28, "NXT Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate motor with power");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('NXT Motor');
}};
///

Blockly.Blocks['nxtMotor_rotateForSeconds'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_nxt.png", 28, 28, "NXT Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate motor with power");
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("for seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('NXT Motor');
}};
///

Blockly.Blocks['nxtMotor_rotateForDegrees'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_nxt.png", 28, 28, "NXT Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate motor with power");
    this.appendValueInput("DEGREES")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("for degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('NXT Motor');
}};
///

Blockly.Blocks['nxtMotor_stop'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_nxt.png", 28, 28, "NXT Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stop motor");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('NXT Motor');
}};
///

Blockly.Blocks['nxtMotor_getRotatedDegrees'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_nxt.png", 28, 28, "NXT Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT")
      .appendField("rotated degrees");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('NXT Motor');
}};
///

Blockly.Blocks['nxtMotor_reset'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_nxt.png", 28, 28, "NXT Motor"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("reset rotated degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('NXT Motor');
}};
///

// ----------- STEPPER BLOCKS -----------

Blockly.Blocks['stepper_rotateForSteps'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_stepper.png", 28, 28, "Stepper"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("STEPS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("rotate stepper for steps");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stepper');
}};
///

Blockly.Blocks['stepper_setSpeed'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/actions/icon_motor_stepper.png", 28, 28, "Stepper"))
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendValueInput("SPEED")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set stepper speed (steps per second)");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stepper');
}};
///
