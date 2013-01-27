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

if(typeof exports == "undefined") {
    exports = this['drone'] = {};
}

var Drone = function (options) {
    
    options = options || {};
    
    this.name = options.name || "no name";
    this.device = options.device || Drone.DEVICE_UNKNOWN;
    this.vehicelType = options.vehicleType;

    this.capabilities = options.capabilities || new DroneCapabilities();
}

Drone.DEVICE_UNKNOWN = 'unknown';
Drone.DEVICE_PARROT_V1 = 'parrot.v1';
Drone.DEVICE_PARROT_V2 = 'parrot.v2';

exports.Drone = Drone;
