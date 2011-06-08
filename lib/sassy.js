
exports.to = function(res) {
		this.with = new wither(res);
		return this;
}

function wither(res) { 
	this.html = new htmler(res);
}

function htmler(res) {
	this.res = res;

	this.send404 = function() {
		this.res.writeHead(404);
		this.res.write("sorry, but we have a pretty short memory.  we'll try to dig this up and put it back soon.");
		this.res.end();
	}

	this.content = function(htmlContent) { 
		this.res.writeHead(200, {'Content-Type': 'text/html'})
		this.res.write(htmlContent, 'utf8');
   	this.res.end();
	}
}
