'use strict';

var Editor = {};

Editor.workspace = null;

Editor.showToolboxBlocks = function(categoryName) {
  var categories = Editor.workspace.toolbox_.tree_.children_;
  for (var i in categories) {
    if (categories[i].element_.innerHTML.indexOf('['+categoryName+']')>=0) {
      categories[i].onMouseDown();
      break;
    }
  }
};

Editor.loadBlocks = function(xmlText) {
  if (xmlText) {
    var xmlDom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(Editor.workspace, xmlDom);
  } else {
    Editor.workspace.clear();
  }
};

Editor.exportBlocks = function() {
  var xmlDom = Blockly.Xml.workspaceToDom(Editor.workspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  return xmlText; 
};

Editor.exportBlocksToJS = function(debug) {
    if (debug) {
      Blockly.JavaScript.STATEMENT_PREFIX = '_sys.log("BLOCK_ID %1");\n';
    } else {
      Blockly.JavaScript.STATEMENT_PREFIX = '';
    }
    return Blockly.JavaScript.workspaceToCode(Editor.workspace);
};

Editor.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

Editor.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

Editor.init = function() {
  
  // resizing routine
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = Editor.getBBox_(container);
    var el = document.getElementById('content_blocks');
    el.style.top = bBox.y + 'px';
    el.style.left = bBox.x + 'px';
    // Height and width need to be set, read back, then set again to
    // compensate for scrollbars.
    el.style.height = bBox.height + 'px';
    el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
    el.style.width = bBox.width + 'px';
    el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    el.style.visibility = 'visible';
  };
  window.addEventListener('resize', onresize, false);

  // init workspace
  var toolbox = document.getElementById('toolbox');
  Editor.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 21,
           length: 21,
           colour: '#eee',
           snap: true},
       media: '../../media/',
       toolbox: toolbox});

  customizeBlocklyOptions();

  if (Editor.getStringParamFromUrl('toolbox', '0')!='1') {
    Editor.workspace.toolbox_.tree_.element_.style.width='0px';
  }

  Editor.loadBlocks('');
  Blockly.fireUiEvent(window, 'resize');
};

window.addEventListener('load', Editor.init);
