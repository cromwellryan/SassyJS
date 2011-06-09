exports.to = function(res) {
		this.with = new wither(res);
		return this;
}

function wither(res) { 
	this.html = new htmler(res);
}

function htmler(res) {
	this.res = res;

	this.send404 = function(htmlContent) {
		if(htmlContent == null) htmlContent = "<html><head><title>Sassy's sorry</title></head><body>Sassy's really sorry, but she can't find that right now.</body</html>";
		this.res.writeHead(404);
		this.res.write(htmlContent);
		this.res.end();
	}

	this.content = function(htmlContent) { 
		this.res.writeHead(200, {'Content-Type': 'text/html'})
		this.res.write(htmlContent, 'utf8');
   	this.res.end();
	}
}
