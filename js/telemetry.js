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

Telemetry.STATE_LANDED = 0;
Telemetry.STATE_LANDING = 1;
Telemetry.STATE_TAKING_OFF = 2;
Telemetry.STATE_HOVERING = 3;
Telemetry.STATE_ABORTED = 4;
Telemetry.STATE_FLYING = 5;
Telemetry.STATE_TEST_MODE = 6;
Telemetry.STATE_IDLE = 7;
Telemetry.STATE_AUTONOMOUS = 7;
Telemetry.STATE_UNKNOWN = -1;

function Telemetry(options) {
    options = options || {};
    
    this.name = options.name === undefined ? "unknown" : options.name;
    this.id = options.id === undefined ? "unknown" : options.id;
    this.state = options.state === undefined ? '' : options.state;
    this.speed = options.speed === undefined ? 0 : options.speed;
    this.velocity = options.velocity === undefined ? {x: 0, y: 0, z: 0} : options.velocity;
    this.attitude = options.attitude === undefined ? new Attitude() : options.attitude;
    this.altitude = options.altitude === undefined ? 0 : options.altitude;
    this.temperature = options.temperature === undefined ? 0 : options.temperature;
    this.heading = options.heading === undefined ? 0 : options.heading;
    this.vsi = options.vsi === undefined ? 0 : options.vsi;
    this.position = options.position === undefined ? new Position() : options.position;
    this.batteryVoltage = options.batteryVoltage === undefined ? 0 : options.batteryVoltage;
    this.batteryCharge = options.batteryCharge === undefined ? 0 : options.batteryCharge;
}
