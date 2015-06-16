var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var portname = process.argv[2];


var serialPort = new SerialPort(portname, {
	baudrate: 115200,
	parser: serialport.parsers.readline("\n")
}, false); // this is the openImmediately flag [default is true]

var portvalue = [];

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

			console.log(portvalue);
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
		}, 100);
	}, 2000);
}

