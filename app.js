//var drone = require('ar-drone');
var express = require('express');
var hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);

var app = express();

// Register partials folder (hbs)
hbsutils.registerPartials('./views/partials');
hbsutils.registerWatchedPartials('./views/partials');

// Set hbs as the view engine
app.set('view engine', 'hbs');
app.engine('html', hbs.__express);

// Set server port and IP details
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || 'localhost');

// Set public root directory
app.use(express.static('public'));

// Index
app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'UnionTTC AR-Drone Demo'
    });
});
/*
var client  = drone.createClient();
client.disableEmergency();

console.log('[ardrone] Connecting png stream ...');
var pngStream = client.getPngStream();

var lastPng;
pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
  });



client.takeoff();

client.land();
*/
// Start server
var server = app.listen(app.get('port'), app.get('ip'), function() {
    var address = server.address();
    console.log('[ardrone] app running on http://%s:%s', address.address, address.port);
});
