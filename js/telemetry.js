/*
 * telemetry.js
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
    var exports = this['telemetry'] = {};
    module.exports = exports;
}
if (typeof require != "undefined") {
    var Attitude = require('./attitude');
    var Position = require('./position');
}

module.exports = Telemetry;

function Telemetry(options) {
    options = options || {};
    
    this.name = ((options.name != null) ? options.name : "unknown");
    this.id = ((options.id != null) ? options.id : "unknown");

    this.speed = ((options.speed != null) ? options.speed : 0);
    this.velocity = ((options.velocity != null) ? options.velocity : {x: 0, y: 0, z: 0});
    this.attitude = ((options.attitude != null) ? options.attitude : new Attitude());
    this.altitude = ((options.altitude != null) ? options.altitude : 0);
    this.temperature = ((options.temperature != null) ? options.temperature : 0);
    this.heading = ((options.heading != null) ? options.heading : 0);
    this.vsi = ((options.vsi != null) ? options.vsi : 0);
    this.position = ((options.position != null) ? options.position : new Position());
    this.batteryVoltage = ((options.batteryVoltage != null) ? options.batteryVoltage : 0);
    this.batteryCurrent = ((options.batteryCurrent != null) ? options.batteryCurrent : 0);
    this.batteryCharge = ((options.batteryCharge != null) ? options.batteryCharge : 0);
    this.dirty = false;
}
