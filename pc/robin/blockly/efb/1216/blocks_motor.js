// ----------- MEDIUM MOTOR ACTION BLOCKS -----------

Blockly.Blocks['motorMedium_on'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_m.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motorMedium_on'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".on(" + value_power + ");\n";
    return code;
};

Blockly.Blocks['motorMedium_off'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_m.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("停止");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motorMedium_off'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".off(" + value_brake + ");\n";
    return code;
};

Blockly.Blocks['motorMedium_onForSeconds'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_m.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("秒数");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motorMedium_onForSeconds'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".onForSeconds(" + value_power + ", " + value_seconds + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['motorMedium_onForDegrees'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_m.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.appendValueInput("DEGREES")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("角度");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motorMedium_onForDegrees'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".onForDegrees(" + value_power + ", " + value_degrees + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['motorMedium_onForRotations'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_m.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.appendValueInput("ROTATIONS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("圈数");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motorMedium_onForRotations'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rotations = Blockly.JavaScript.valueToCode(block, 'ROTATIONS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".onForRotations(" + value_power + ", " + value_rotations + ", " + value_brake + ");\n";
    return code;
};


// ----------- LARGE MOTOR ACTION BLOCKS -----------

Blockly.Blocks['motor_on'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_l.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motor_on'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".on(" + value_power + ");\n";
    return code;
};

Blockly.Blocks['motor_off'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_l.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("停止");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motor_off'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".off(" + value_brake + ");\n";
    return code;
};

Blockly.Blocks['motor_onForSeconds'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_l.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("秒数");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motor_onForSeconds'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".onForSeconds(" + value_power + ", " + value_seconds + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['motor_onForDegrees'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_l.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.appendValueInput("DEGREES")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("角度");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motor_onForDegrees'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".onForDegrees(" + value_power + ", " + value_degrees + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['motor_onForRotations'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_motor_l.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("启动");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.appendValueInput("ROTATIONS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("圈数");
    this.appendValueInput("BRAKE")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("刹车");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motor_onForRotations'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rotations = Blockly.JavaScript.valueToCode(block, 'ROTATIONS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "motor" + dropdown_port + ".onForRotations(" + value_power + ", " + value_rotations + ", " + value_brake + ");\n";
    return code;
};


// ----------- MOTOR SENSOR BLOCKS -----------

Blockly.Blocks['motor_degrees'] = {
init: function() {
    this.setColour(SensorBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_rotation.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT")
      .appendField("旋转角度");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['motor_degrees'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var code = "motor" + dropdown_port + ".degrees()";
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['motor_rotations'] = {
init: function() {
    this.setColour(SensorBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_rotation.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT")
      .appendField("旋转圈数");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['motor_rotations'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var code = "motor" + dropdown_port + ".rotations()";
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['motor_power'] = {
init: function() {
    this.setColour(SensorBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_rotation.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT")
      .appendField("当前功率");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['motor_power'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var code = "motor" + dropdown_port + ".currentPower()";
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['motor_reset'] = {
init: function() {
    this.setColour(SensorBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_rotation.png", 28, 28, "*"))
      .appendField("电机")
      .appendField(new Blockly.FieldDropdown(MotorPorts), "PORT")
      .appendField("重置测量");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['motor_reset'] = function(block) {
    var dropdown_port = block.getFieldValue('PORT');
    var code = "motor" + dropdown_port + ".reset();\n";
    return code;
};



