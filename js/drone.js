/*
 * drone.js
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

if (typeof module == "undefined"){
    var module = function(){};
    var exports = this['drone'] = {};
    module.exports = exports;
}
if (typeof require != "undefined") {
    var DroneCapabilities = require('./droneCapabilities');
}

module.exports = Drone;

Drone.DEVICE_UNKNOWN = 'unknown';
Drone.DEVICE_PARROT_V1 = 'parrot.v1';
Drone.DEVICE_PARROT_V2 = 'parrot.v2';

function Drone(options) {
    options = options || {};
    
    this.name = options.name === undefined ? "no name" : options.name;
    this.device = options.device === undefined ? Drone.DEVICE_UNKNOWN : options.device;
    this.vehicelType = options.vehicleType;
    this.capabilities = options.capabilities === undefined ? new DroneCapabilities() : options.capabilities;
}
