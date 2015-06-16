var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var portname = process.argv[2];


var serialPort = new SerialPort(portname, {
	baudrate: 115200,
	parser: serialport.parsers.readline("\n")
}, false); // this is the openImmediately flag [default is true]



serialPort.on("data", function (data) {
  try {
		//console.log(data.toString());
		var port = JSON.parse(data.toString()); // Produces a SyntaxError

    console.log(port);
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
		}, 1000);
	}, 2000);
}

