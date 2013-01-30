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

Vehicle.UOM_KMH = 'kilometersPerHour';
Vehicle.UOM_MH = 'milesPerHour';
Vehicle.UOM_MS = 'metersPerSecond';

Vehicle.DEVICE_PARROT_V1 = 'parrot.v1';
Vehicle.DEVICE_PARROT_V2 = 'parrot.v2';

Vehicle.COMMS_DISCONNECTED = 0;
Vehicle.COMMS_CONNECTED = 1;
Vehicle.COMMS_RECONNECTING = 2;
Vehicle.COMMS_DISCONNECTING = 3;

Vehicle.validTypes = new Object();
Vehicle.validTypes[Vehicle.TYPE_KEY_AIR] = 'Air';
Vehicle.validTypes[Vehicle.TYPE_KEY_SURFACE] = 'Surface';
Vehicle.validTypes[Vehicle.TYPE_KEY_SUBMERSIBLE] = 'Submersible';

function Vehicle(options) {
    options = options || {};
    
    this.connectionStatus = options.connectionStatus || Vehicle.VEHICLE_DISCONNECTED;
    this.position = options.position || 0;
    
    this.name = options.name || Vehicle.DEFAULT_NAME;
    this.id = options.id || "none";
    this.type = options.type || Vehicle.VEHICLE_AIR;
    this.deviceType = options.deviceType || Vehicle.DEVICE_PARROT_V1;
    
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
    
    this.navigationEnabled = ((options.navigationEnabled != null) ? options.navigationEnabled : false);
    this.remoteControlEnabled = ((options.remoteControlEnabled != null) ? options.remoteControlEnabled : true);

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
    if(options.actualPath) {
	if(options.actualPath instanceof Path) {
	    this.actualPath = options.actualPath;
	} else {
	    this.actualPath = new Path(options.actualPath);
	}
    } else {
	this.actualPath = new Path();
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
