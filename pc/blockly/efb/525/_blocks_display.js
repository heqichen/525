
var FontSizes = [["标准", "0"], ["粗体", "1"], ["大号", "2"]];

Blockly.Blocks['display_fontsize'] = {
init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(FontSizes), "FONTSIZE");
    this.setOutput(true, "Number");
    this.setTooltip('');
}};
Blockly.JavaScript['display_fontsize'] = function(block) {
    var dropdown_fontsize = block.getFieldValue('FONTSIZE');
    var code = dropdown_fontsize;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// ----------- DISPLAY BLOCKS -----------

Blockly.Blocks['display_clearScreen'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("清空");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['display_clearScreen'] = function(block) {
    var code = "display.clearScreen();\n";
    return code;
};

Blockly.Blocks['display_drawTextInPixels'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendValueInput("TEXT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("显示文字");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("涂色");
    this.appendValueInput("FONTSIZE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("字体");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
Blockly.JavaScript['display_drawTextInPixels'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
    var value_fontsize = Blockly.JavaScript.valueToCode(block, 'FONTSIZE', Blockly.JavaScript.ORDER_ATOMIC);

    var code = "display.drawTextInPixels(" + value_text + ", " + value_x + ", " + value_y + ", " + value_color + ", " + value_fontsize + ");\n";
    return code;
};

Blockly.Blocks['display_drawTextInGrid'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendValueInput("TEXT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("显示文字");
    this.appendValueInput("COLUMN")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("列");
    this.appendValueInput("ROW")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("行");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("涂色");
    this.appendValueInput("FONTSIZE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("字体");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
///

Blockly.Blocks['display_drawLine'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("画线");
    this.appendValueInput("X1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");
    this.appendValueInput("X2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X2");
    this.appendValueInput("Y2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y2");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("涂色");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
///

Blockly.Blocks['display_drawRectangle'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("画框");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("宽度");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("高度");
    this.appendValueInput("FILL")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("添充");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("涂色");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
///

Blockly.Blocks['display_drawCircle'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("画圆");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y");
    this.appendValueInput("RADIUS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("半径");
    this.appendValueInput("FILL")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("添充");
    this.appendValueInput("COLOR")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("涂色");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
///

Blockly.Blocks['display_drawImage'] = {
init: function() {
    this.setColour(ActionBlockColor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("icons/icon_display.png", 28, 28, "*"))
      .appendField("屏幕")
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("显示图片");
    this.appendValueInput("IMAGENAME")
      .setCheck("Text")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("图片名");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
}};
///