var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var portname = process.argv[2];


var serialPort = new SerialPort(portname, {
	baudrate: 115200,
	parser: serialport.parsers.readline("\n")
}, false); // this is the openImmediately flag [default is true]

var portvalue = [];
var itemList = [];

itemList[2] = "button";
itemList[3] = "button";
itemList[4] = "button";

itemList[11] = "led";
itemList[12] = "led";
itemList[13] = "led";



serialPort.on("data", function (data) {
  try {
		//console.log(data.toString());
		var port = JSON.parse(data.toString()); // Produces a SyntaxError
		if (port.message === "portview")
		{
			var i;
			for (i=0; i<14; ++i)
			{
				portvalue[i] = undefined;
			}
			for (i=0; i<port.portlist.length; ++i)
			{
				portvalue[Number(port.portlist[i])] = port.valuelist[i];
			}

			//console.log(portvalue);
		}
		//console.log(port);
	} catch (error) {
		// Handle the error
		//console.log(error.message);
	}
});

serialPort.open()
{
	setTimeout(function(){
		setInterval(function(){
			//console.log("a");
			serialPort.write("p");
		}, 500);
	}, 2000);
}



//================================http============

var http = require("http");
var url = require("url");
var path = require('path');
var fs = require('fs');
var io = require("socket.io");
var ws = require("nodejs-websocket");

var mime = require("./mime");

var config = require("./config");


var httpPort = Number(process.argv[3]);
var wsPort = Number(process.argv[4]);

var sendFile = function(filename, resp) {
	var extension = path.extname(filename);
	var contentType = mime[extension];
	resp.writeHead(200, {"Content-Type": contentType,"Access-Control-Allow-Origin" : "*"});
	var file = fs.readFileSync(filename);
	resp.write(file);
	resp.end();
}

var httpServer = http.createServer(function(req, resp) {
	var urlObj = url.parse(req.url, true);
	var pathSplit = urlObj.pathname.split("/");
	
	//default index: 
	if (pathSplit.length==2 && pathSplit[1].length==0) {
		sendFile(config.defaultIndex, resp);
	} else {
		//send static resource
		if (pathSplit[1] == "static") {
			var filename = config.staticDir + pathSplit[2];
			if (fs.existsSync(filename)) {
				sendFile(filename, resp);
			} else {
				resp.writeHead(404, {});
				resp.write("static file not found");
				resp.end();
			}
		}
	}

});

var ioServer = io(httpServer);

var firstClient = undefined;

var count = 1;

var serverConnection = undefined;

var IoClient = function(socket)
{
	var self = this;

	self.previousClient = undefined;
	self.nextClient = undefined;
	self.count = count;
	count += 1;
	//initialize
	socket.on("disconnect", function(){
		if (self.previousClient == undefined) {
			firstClient = self.nextClient;

			if (self.nextClient != undefined) {
				self.nextClient.previousClient = this.previousClient;
			}
		} else {
			self.previousClient.nextClient = self.nextClient;
			if (self.nextClient != undefined) {
				self.nextClient.previousClient = this.previousClient;
			}
		}
	});

	socket.on("test", function(message) {
		console.log("tst message from: " + self.count);
		console.log(message);
	});
	socket.on("control", function(message) {
		if (serverConnection != undefined) {
			serverConnection.sendText(message);
		}
	})


	self.insertNew = function(anotherClient) {
		if (self.nextClient == undefined) {
			self.nextClient = anotherClient;
			anotherClient.previousClient = self;
		} else {
			self.nextClient.insertNew(anotherClient);
		}
	}

	self.trivialEmitData = function(data) {
		socket.emit("data", data);
		//console.log("emit data " + data);
		if (self.nextClient != undefined) {
			self.nextClient.trivialEmitData(data);
		}
	}
}

var trivialClient = function()
{
	var currentClient = firstClient;
	while (currentClient != undefined) {
		//console.log(currentClient.count);
		currentClient = currentClient.nextClient;
	}
}

ioServer.on("connection", function(socket) {
	var client = new IoClient(socket);
	if (firstClient == undefined) {
		firstClient = client;
	} else {
		firstClient.insertNew(client);
	}

	trivialClient();
});

httpServer.listen(httpPort);
console.log("Please go to http://localhost:" + httpPort + "/static/index.html");



var server = ws.createServer(function(conn) {
	serverConnection = conn;
	conn.on("error", function(reason, code) {
		console.log('socket error: reason ' + reason + ', code ' + code);
	});
	console.log("new Connection come in");
	conn.sendText("hello wld");
	conn.on("text", function(str) {
		//console.log("recv: " + str);
		if (firstClient != undefined) {
			firstClient.trivialEmitData(str);
		}
	});
	conn.on("close", function(code, reason) {
		console.log("connection closed");
		serverConnection = undefined;
	});
}).listen(wsPort);

function portItem()
{
	deviceType = undefined;
	value = "N/A";
}

function makePortReport()
{
	var ret = [];
	var i;
	for (i=0; i<14; ++i)
	{
		ret[i] = {
			"device": itemList[i], 
			"value": portvalue[i], 
		};
	}
	return JSON.stringify(ret);
}

setInterval(function(){
	
	if (firstClient != undefined) {
		firstClient.trivialEmitData(makePortReport());
	}
}, 100);