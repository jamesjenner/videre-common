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

if(typeof exports == "undefined") {
    var exports = this['droneCapabilities'] = {};
}

var DroneCapabilities = function (options) {
    
    options = options || {};

    // capabilities for telemetry reporting
    this.hover = ((options.hover != null) ? options.hover : false);
    this.vtol = ((options.vtol != null) ? options.vtol : false);
    this.speed = ((options.speed != null) ? options.speed : false);
    this.velocityX = ((options.velocityX != null) ? options.velocityX : false);
    this.velocityY = ((options.velocityY != null) ? options.velocityY : false);
    this.velocityZ = ((options.velocityZ != null) ? options.velocityZ : false);
    this.attitude = ((options.attitude != null) ? options.attitude : false);
    this.altitude = ((options.altitude != null) ? options.altitude : false);
    this.temperature = ((options.temperature != null) ? options.temperature : false);
    this.heading = ((options.heading != null) ? options.heading : false);
    this.vsi = ((options.vsi != null) ? options.vsi : false);
    this.position = ((options.position != null) ? options.position : false);
    this.batteryVoltage = ((options.batteryVoltage != null) ? options.batteryVoltage : false);
    this.batteryCharge = ((options.batteryCharge != null) ? options.batteryCharge : false);
}

exports.DroneCapabilities = DroneCapabilities;
