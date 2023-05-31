var http = require('http');
var url =  require('url');
var fs = require('fs');


http.createServer(function (req, res){
	
	var reqUrl = url.parse(req.url, true);

	// extract requested filename from request.
	var filename = reqUrl.pathname === '/' ? './index.html' : `.${reqUrl.pathname}.html` ;

	console.log('...Incoming Request:', reqUrl.pathname);
	fs.readFile(filename, 
		function(err, data){
			
			// handling errors
			if(err){
				res.writeHead(404,{'Content-Type' : 'text/html'});
				return res.end('404 Not Found');
			}

			res.writeHead(200, {'Content-pe' : 'text/html'});
			res.write(data);
			return res.end();
		}
	)
	
}).listen(8080);

console.log('Server listenig on port 8080...')
