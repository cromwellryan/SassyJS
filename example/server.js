var http = require('http')
	, url = require('url')
	, respond = require('../../sassy')
	, server;

server = http.createServer(function(req,res) {
	var path = url.parse(req.url).pathname;

	switch(path) {
		case "/":
			respond.to(res).with.html.content("hello there!");
			break;
		default: respond.to(res).with.html.send404("<html><head><title>Wierd...</title></head><body><a href=\"http://google.com\">Let me suggest my friend google</a></body></html>");
	}
}),

server.listen(8080);

