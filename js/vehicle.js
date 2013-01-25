/*
 * vehicle.js v0.1 alpha
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

var VEHICLE_AIR = 'Air';
var VEHICLE_SURFACE = 'Surface';
var VEHICLE_SUBMERSIBLE = 'Submersible';

var VEHICLE_KEY_AIR = 'air';
var VEHICLE_KEY_SURFACE = 'surface';
var VEHICLE_KEY_SUBMERSIBLE = 'submersible';

var VEHICLE_KEY = 'Vehicle';
var VEHICLE_DEFAULT_NAME = 'Thunderbird 1';

var VEHICLE_UOM_KMH = 'kilometersPerHour';
var VEHICLE_UOM_MH = 'milesPerHour';
var VEHICLE_UOM_MS = 'metersPerSecond';

var VEHICLE_DEVICE_PARROT_V1 = 'parrot.v1';
var VEHICLE_DEVICE_PARROT_V2 = 'parrot.v2';

var VEHICLE_DISCONNECTED = 0;
var VEHICLE_CONNECTED = 1;
var VEHICLE_RECONNECTING = 2;
var VEHICLE_DISCONNECTING = 3;

var vehicleValidTypes = new Object();
vehicleValidTypes[VEHICLE_KEY_AIR] = 'Air';
vehicleValidTypes[VEHICLE_KEY_SURFACE] = 'Surface';
vehicleValidTypes[VEHICLE_KEY_SUBMERSIBLE] = 'Submersible';

var Vehicle = function (options) {
    
    options = options || {};
    
    this.connectionStatus = options.connectionStatus || VEHICLE_DISCONNECTED;
    this.position = options.position || 0;
    
    this.name = options.name || VEHICLE_DEFAULT_NAME;
    this.id = options.id || "none";
    this.type = options.type || VEHICLE_AIR;
    this.deviceType = options.deviceType || VEHICLE_DEVICE_PARROT_V1;
    
    // check that the type if valid, if not then assign to the first entry
    var isTypeValid = false;
    
    for(var i in vehicleValidTypes) {
        if(this.type == vehicleValidTypes[i]) {
          isTypeValid = true;
          break;
        }
    }

    if(!isTypeValid) {
        this.type = VEHICLE_AIR;
    }
    
    this.navigationEnabled = ((options.navigationEnabled != null) ? options.navigationEnabled : false);
    this.remoteControlEnabled = ((options.remoteControlEnabled != null) ? options.remoteControlEnabled : true);

    this.navigationPath = options.navigationPath || new Path();
    this.actualPath = options.actualPath || new Path();
    
    this.telemetry = options.telemetry || new Telemetry();
}
