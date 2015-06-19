function customizeBlocklyOptions() {
  Blockly.Msg.LOGIC_BOOLEAN_FALSE = "×";
  Blockly.Msg.LOGIC_BOOLEAN_TRUE = "✓";
  Blockly.Blocks.math.HUE = MathBlockColor;
  Blockly.Blocks.logic.HUE = LogicBlockColor;
  Blockly.Blocks.texts.HUE = TextBlockColor;
}

var FlowBlockColor = 120;
var DataBlockColor = 120;
var MathBlockColor = 330;
var LogicBlockColor = 210;
var TextBlockColor = 40;
var SensorBlockColor = 180;
var ActionBlockColor = 180;

var SensorPorts = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]];
var MotorPorts = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"]];
var MotorPairPorts = [["A+B", "AB"], ["C+D", "CD"], ["A+D", "AD"], ["B+C", "BC"], ["B+A", "BA"], ["D+C", "DC"], ["D+A", "DA"], ["C+B", "CB"]];

// ----------- CORE FIELD BLOCKS -----------

Blockly.Blocks['logic_boolean'] = {
init: function() {
    this.setColour(LogicBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("TRUE"), "BOOL");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
}};
Blockly.JavaScript['logic_boolean'] = function(block) {
    var checkbox_bool = (block.getFieldValue('BOOL') == 'TRUE');
    var code = (checkbox_bool ? 'true' : 'false' );
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['math_degrees'] = {
init: function() {
    this.setColour(MathBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldAngle("90"), "NUM");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['math_degrees'] = function(block) {
    var angle_num = block.getFieldValue('NUM');
    var code = angle_num;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------- FLOW CONTROL BLOCKS -----------

Blockly.Blocks['task_start'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons_small/icon_start.png", 16, 16, "*"))
      .appendField("开始")
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(true);
    this.setTooltip('');
}};
///

Blockly.Blocks['task_stop'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons_small/icon_stop.png", 16, 16, "*"))
      .appendField("结束")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setTooltip('');
}};
///

Blockly.Blocks['wait_seconds'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage("icons_small/icon_wait.png", 16, 16, "*"))
      .appendField("等待 秒数");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['wait_seconds'] = function(block) {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "waitSeconds(" + value_seconds + ");\n";
  return code;
};

Blockly.Blocks['wait_for'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendValueInput("FOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage("icons_small/icon_wait.png", 16, 16, "*"))
      .appendField("等待");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['wait_for'] = function(block) {
  var value_for = Blockly.JavaScript.valueToCode(block, 'FOR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "";
  if (value_for != "") {
      code = "while (!" + value_for + ") {};\n";
  }
  return code;
};

Blockly.Blocks['if_then'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendValueInput("IF")
      .setCheck("Boolean")
      .appendField(new Blockly.FieldImage("icons_small/icon_switch.png", 16, 16, "*"))
      .appendField("如果")
    this.appendStatementInput("THEN");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['if_then'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'THEN');
  var code = "if " + value_if + " {\n" + branch + "} \n";
  return code;
};

Blockly.Blocks['if_else'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendValueInput("IF")
      .setCheck("Boolean")
      .appendField(new Blockly.FieldImage("icons_small/icon_if.png", 16, 16, "*"))
      .appendField("如果")
    this.appendStatementInput("THEN");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons_small/icon_else.png", 16, 16, "*"))
      .appendField("否则")
    this.appendStatementInput("ELSE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['if_else'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_ATOMIC);
  var branch1 = Blockly.JavaScript.statementToCode(block, 'THEN');
  var branch2 = Blockly.JavaScript.statementToCode(block, 'ELSE');
  var code = "if " + value_if + " {\n" + branch1 + "} else {\n" + branch2 + "} \n";
  return code;
};

Blockly.Blocks['loop_infinite'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons_small/icon_loop.png", 16, 16, "*"))
      .appendField("循环")
      .appendField(new Blockly.FieldTextInput("01"), "LOOPNAME");
    this.appendStatementInput("LOOP");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['loop_infinite'] = function(block) {
  var value_loopname = block.getFieldValue('LOOPNAME');
  var branch = Blockly.JavaScript.statementToCode(block, 'LOOP');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = "_sys.setLoopName('" + value_loopname + "');\nwhile (true) {\n" + branch + "}\n";
  return code;
};

Blockly.Blocks['loop_until'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons_small/icon_loop.png", 16, 16, "*"))
      .appendField("循环")
      .appendField(new Blockly.FieldTextInput("01"), "LOOPNAME");
    this.appendStatementInput("LOOP");
    this.appendValueInput("UNTIL")
      .setCheck("Boolean")
      .appendField(new Blockly.FieldImage("icons_small/icon_interrupt.png", 16, 16, "*"))
      .appendField("直到");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['loop_until'] = function(block) {
  var value_loopname = block.getFieldValue('LOOPNAME');
  var value_unitl = Blockly.JavaScript.valueToCode(block, 'UNTIL', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'LOOP');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = "_sys.setLoopName('" + value_loopname + "');\ndo {\n" + branch + "} while (" + (value_unitl!="" ? "!"+value_unitl : "true") + ");\n";
  return code;
};

Blockly.Blocks['loop_interrupt'] = {
init: function() {
    this.setColour(FlowBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons_small/icon_interrupt.png", 16, 16, "*"))
      .appendField("中断循环")
      .appendField(new Blockly.FieldTextInput("01"), "LOOPNAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['loop_interrupt'] = function(block) {
  var value_loopname = block.getFieldValue('LOOPNAME');;
  var code = "loopInterrupt('" + value_loopname + "');\n";
  return code;
};
