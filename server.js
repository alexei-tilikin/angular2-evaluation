var express = require("express");
var app = express();

const ROOT_PATH = "/mnt/dev/angular2/project/";

//headers to disable browser caching and avoid (304 Not Modified) status
app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  res.setHeader('Pragma', "no-cache, no-store, must-revalidate");
  res.setHeader('Cache-Control', "no-cache");

  next(); 
});

app.get("/about", function(req, res) {
	res.status(200).send("Express server set on root path " + ROOT_PATH);
});

app.get("/close", function(req, res) {
	var byeMessage = "<html><head><title>Shutting down the server</title></head>" +
	'<body style="font-family: monospace; font-size: 16px;">' + 
	'<p>Server shutdown requested.</p>' +
	'<p>Bye-Bye!</p>' +
	"</body></html>";

	console.log("Bye-Bye");
	res.status(200).type("html").send(byeMessage);
	if (server)
		server.close();
	
	process.exit(0);
});

app.get("/", function(req, res) {
	res.redirect("/index.html");
});

app.get("/*", function(req, res) {
	var fileParams = {
		"root": ROOT_PATH
	};

	console.log("Fetching file: " + ROOT_PATH + req.path);

	res.status(200).sendFile(req.path, fileParams, function(err) {
		if (!err)
			return;

		console.error("404 File Not Found: " + ROOT_PATH + req.path);

		var errResponse = "<html><head><title>404 File Not Found</title></head>" +
		'<body style="font-family: monospace;"><h3>File Not Found (404)</h3>' +
		'<pre>' + err + '</pre>' +
		"</body></html>";

		res.status(404).type("html").send(errResponse);
	});
	
});

var server = app.listen(8080);
