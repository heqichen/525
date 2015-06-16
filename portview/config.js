"use strict";

var DefaultConfiguration = function() {
	var config = {
		staticDir : "static/",
		defaultIndex: "static/index.html", 
	};
	
	return config;
}

var faureciaHr = new DefaultConfiguration();
faureciaHr.staticDir = "static-hr/";
faureciaHr.defaultIndex = "static-hr/index.html";

var efb = new DefaultConfiguration();
efb.staticDir = "static-efb/";
efb.defaultIndex = "static-efb/index.html";


module.exports = efb;
