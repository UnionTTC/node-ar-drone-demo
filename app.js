var drone = require('ar-drone');
var client  = drone.createClient();

client.takeoff();

client.land();
