// ----------- MOVE STEERING BLOCKS -----------

Blockly.Blocks['moveSteering_on'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_steering.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("STEERING")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("转向");
    this.appendValueInput("POWER")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("功率");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['moveSteering_on'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_steering = Blockly.JavaScript.valueToCode(block, 'STEERING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveSteering" + dropdown_ports + ".on(" + value_steering + ", " + value_power + ");\n";
    return code;
};

Blockly.Blocks['moveSteering_off'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_steering.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
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
Blockly.JavaScript['moveSteering_off'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_steering = Blockly.JavaScript.valueToCode(block, 'STEERING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveSteering" + dropdown_ports + ".off(" + value_steering + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['moveSteering_onForSeconds'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_steering.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("STEERING")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("转向");
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
Blockly.JavaScript['moveSteering_onForSeconds'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_steering = Blockly.JavaScript.valueToCode(block, 'STEERING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveSteering" + dropdown_ports + ".onForSeconds(" + value_steering + ", " + value_power + ", " + value_seconds + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['moveSteering_onForDegrees'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_steering.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("STEERING")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("转向");
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
Blockly.JavaScript['moveSteering_onForDegrees'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_steering = Blockly.JavaScript.valueToCode(block, 'STEERING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveSteering" + dropdown_ports + ".onForDegrees(" + value_steering + ", " + value_power + ", " + value_degrees + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['moveSteering_onForRotations'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_steering.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("STEERING")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("转向");
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
Blockly.JavaScript['moveSteering_onForRotations'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_steering = Blockly.JavaScript.valueToCode(block, 'STEERING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rotations = Blockly.JavaScript.valueToCode(block, 'ROTATIONS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveSteering" + dropdown_ports + ".onForRotations(" + value_steering + ", " + value_power + ", " + value_rotations + ", " + value_brake + ");\n";
    return code;
};


// ----------- MOVE TANK BLOCKS -----------

Blockly.Blocks['moveTank_on'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.setTooltip("motor on");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_tank.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("POWER1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("左轮功率");
    this.appendValueInput("POWER2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("右轮功率");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['moveTank_on'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_power1 = Blockly.JavaScript.valueToCode(block, 'POWER1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power2 = Blockly.JavaScript.valueToCode(block, 'POWER2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveTank" + dropdown_ports + ".on(" + value_power1 + ", " + value_power2 + ");\n";
    return code;
};

Blockly.Blocks['moveTank_off'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_tank.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
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
Blockly.JavaScript['moveTank_off'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveTank" + dropdown_ports + ".off(" + value_brake + ");\n";
    return code;
};

Blockly.Blocks['moveTank_onForSeconds'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_tank.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("POWER1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("左轮功率");
    this.appendValueInput("POWER2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("右轮功率");
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
Blockly.JavaScript['moveTank_onForSeconds'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_power1 = Blockly.JavaScript.valueToCode(block, 'POWER1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power2 = Blockly.JavaScript.valueToCode(block, 'POWER2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveTank" + dropdown_ports + ".onForSeconds(" + value_power1 + ", " + value_power2 + ", " + value_seconds + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['moveTank_onForDegrees'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_tank.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("POWER1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("左轮功率");
    this.appendValueInput("POWER2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("右轮功率");
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
Blockly.JavaScript['moveTank_onForDegrees'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_power1 = Blockly.JavaScript.valueToCode(block, 'POWER1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power2 = Blockly.JavaScript.valueToCode(block, 'POWER2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveTank" + dropdown_ports + ".onForDegrees(" + value_power1 + ", " + value_power2 + ", " + value_degrees + ", " + value_brake + ");\n";
    return code;
};

Blockly.Blocks['moveTank_onForRotations'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_tank.png", 28, 28, "*"))
      .appendField("轮组")
      .appendField(new Blockly.FieldDropdown(MotorPairPorts), "PORTS");
    this.appendValueInput("POWER1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("左轮功率");
    this.appendValueInput("POWER2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("右轮功率");
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
Blockly.JavaScript['moveTank_onForRotations'] = function(block) {
    var dropdown_ports = block.getFieldValue('PORTS');
    var value_power1 = Blockly.JavaScript.valueToCode(block, 'POWER1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_power2 = Blockly.JavaScript.valueToCode(block, 'POWER2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rotations = Blockly.JavaScript.valueToCode(block, 'ROTATIONS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_brake = Blockly.JavaScript.valueToCode(block, 'BRAKE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "moveTank" + dropdown_ports + ".onForRotations(" + value_power1 + ", " + value_power2 + ", " + value_rotations + ", " + value_brake + ");\n";
    return code;
};
