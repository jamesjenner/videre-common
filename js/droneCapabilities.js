/*
 * droneCapabilities.js
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
    var exports = this['droneCapabilities'] = {};
    module.exports = exports;
}

module.exports = DroneCapabilities;

function DroneCapabilities(options) {
    options = options || {};

    // capabilities for telemetry reporting
    this.hover = options.hover === undefined ? false : options.hover;
    this.vtol = options.vtol === undefined ? false : options.vtol;
    this.speed = options.speed === undefined ? false : options.speed;
    this.velocityX = options.velocityX === undefined ? false : options.velocityX;
    this.velocityY = options.velocityY === undefined ? false : options.velocityY;
    this.velocityZ = options.velocityZ === undefined ? false : options.velocityZ;
    this.attitude = options.attitude === undefined ? false : options.attitude;
    this.altitude = options.altitude === undefined ? false : options.altitude;
    this.temperature = options.temperature === undefined ? false : options.temperature;
    this.heading = options.heading === undefined ? false : options.heading;
    this.vsi = options.vsi === undefined ? false : options.vsi;
    this.position = options.position === undefined ? false : options.position;
    this.batteryVoltage = options.batteryVoltage === undefined ? false : options.batteryVoltage;
    this.batteryCharge = options.batteryCharge === undefined ? false : options.batteryCharge;
}

