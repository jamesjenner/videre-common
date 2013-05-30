/*
 * vehicle.js
 *
 * Copyright (c) 2012 James G Jenner
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/
 */

// "use strict"

if(typeof module == "undefined"){
    var module = function(){};
    var exports = this['vehicle'] = {};
    module.exports = exports;
}
if (typeof require != "undefined") {
    var Telemetry = require('./telemetry');
    var Path = require('./path');
    var Position = require('./position');
    var State = require('./state');
}

module.exports = Vehicle;

Vehicle.TYPE_AIR = 'Air';
Vehicle.TYPE_SURFACE = 'Surface';
Vehicle.TYPE_SUBMERSIBLE = 'Submersible';

Vehicle.TYPE_KEY_AIR = 'air';
Vehicle.TYPE_KEY_SURFACE = 'surface';
Vehicle.TYPE_KEY_SUBMERSIBLE = 'submersible';

Vehicle.KEY = 'Vehicle';
Vehicle.DEFAULT_NAME = 'Thunderbird 1';

Vehicle.COMMS_DISCONNECTED = 0;
Vehicle.COMMS_CONNECTED = 1;
Vehicle.COMMS_RECONNECTING = 2;
Vehicle.COMMS_DISCONNECTING = 3;

Vehicle.LAUNCHING = 0;
Vehicle.LAUNCHED = 1;
Vehicle.LANDING = 2;
Vehicle.LANDED = 3;

Vehicle.validTypes = new Object();
Vehicle.validTypes[Vehicle.TYPE_KEY_AIR] = 'Air';
Vehicle.validTypes[Vehicle.TYPE_KEY_SURFACE] = 'Surface';
Vehicle.validTypes[Vehicle.TYPE_KEY_SUBMERSIBLE] = 'Submersible';

Vehicle.POSITION_REPORTING_DISTANCE = 'Distance';
Vehicle.POSITION_REPORTING_TIME = 'Time';


function Vehicle(options) {
    options = options || {};
    
    this.connectionStatus = ((options.connectionStatus != null) ? options.connectionStatus : Vehicle.VEHICLE_DISCONNECTED);

    this.id = ((options.id != null) ? options.id : "none");
    this.name = ((options.name != null) ? options.name : Vehicle.DEFAULT_NAME);
    this.type = ((options.type != null) ? options.type : Vehicle.VEHICLE_AIR);
    this.state = ((options.state != null) ? options.state : new State());
    
    this.deviceId = ((options.id != null) ? options.deviceId : '');

    this.positionReportingMode = ((options.positionReportingMode != null) ? options.positionReportingMode : Vehicle.POSITION_REPORTING_DISTANCE);
    this.positionReportingValue = ((options.positionReportingValue != null) ? options.positionReportingValue : 5);

    this.pitchAccuracy = ((options.pitchAccuracy != null) ? options.pitchAccuracy : 0.003);
    this.rollAccuracy = ((options.rollAccuracy != null) ? options.rollAccuracy : 0.003);
    this.yawAccuracy = ((options.yawAccuracy != null) ? options.yawAccuracy : 0.05);

    this.position = ((options.position != null) ? options.position : new Position());
    this.remoteControlEnabled = ((options.remoteControlEnabled != null) ? options.remoteControlEnabled : false);

    // check that the type if valid, if not then assign to the first entry
    var isTypeValid = false;
    
    for(var i in Vehicle.validTypes) {
        if(this.type == Vehicle.validTypes[i]) {
          isTypeValid = true;
          break;
        }
    }

    if(!isTypeValid) {
        this.type = Vehicle.VEHICLE_AIR;
    }
    
    // create the paths as a new instance, as often it's just JSON parsed data which doesn't hold the object
    if(options.navigationPath) {
	if(options.navigationPath instanceof Path) {
	    this.navigationPath = options.navigationPath;
	} else {
	    this.navigationPath = new Path(options.navigationPath);
	}
    } else {
	this.navigationPath = new Path();
    }
    
    if(options.telemetry) {
	if(options.telemetry instanceof Telemetry) {
	    this.telemetry = options.telemetry;
	} else {
	    this.telemetry = new Telemetry(options.telemetry);
	}
    } else {
	this.telemetry = new Telemetry();
    }
}

/* 
 * update vehicle
 */
Vehicle.merge = function(d1, d2) {
    d1.name = ((d2.name != null) ? d2.name : d1.name);
    d1.type = ((d2.type != null) ? d2.type : d1.type);

    d1.positionReportingMode = ((d2.positionReportingMode != null) ? d2.positionReportingMode : d1.positionReportingMode);
    d1.positionReportingValue = ((d2.positionReportingValue != null) ? d2.positionReportingValue : d1.positionReportingValue);

    d1.pitchAccuracy = ((d2.pitchAccuracy != null) ? d2.pitchAccuracy : d1.pitchAccuracy);
    d1.rollAccuracy = ((d2.rollAccuracy != null) ? d2.rollAccuracy : d1.rollAccuracy);
    d1.yawAccuracy = ((d2.yawAccuracy != null) ? d2.yawAccuracy : d1.yawAccuracy);

    d1.navigationPath = ((d2.navigationPath != null) ? d2.navigationPath : d1.navigationPath);
}
