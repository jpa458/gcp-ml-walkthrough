var fs = require('fs');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use( bodyParser.json() );

app.get("/public/js/app.js", function(req, res) {
    fs.readFile(path.join(__dirname, 'public', 'js', 'app.js'), 'utf8',function(err, data) {
        if (err) {
            res.sendStatus(404);
        } else {
            // modify the data here, then send it
						data = data.toString().replace(/APIKEY/g, process.env.APIKEY);
						data = data.replace(/IPADDR/g, process.env.IPADDR);

            res.send(data);
        }
    });
});


// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
	console.log('retrieve homepage');
  res.sendFile(path.join(__dirname, '/public/index2.html'));
});


var port = process.env.PORT || 8080;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('server running on port ' + port + '.');
});


console.log('Listening, press Ctrl+C to stop.');
