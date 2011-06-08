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
		default: respond.to(res).with.html.send404();
	}
}),

server.listen(8080);

