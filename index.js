'use strict';

var damson = require('damson-core');
var DriverCli = require('damson-driver-cli');
var DriverFile = require('damson-driver-file');
var SendMessage = require('damson-send-message');

damson.registerDriver(DriverCli, 'cli');
damson.registerDriver(DriverFile, 'file', { filepath: 'file_driver_output.txt' });
damson.registerTask(SendMessage, 'send-message');

module.exports = damson;