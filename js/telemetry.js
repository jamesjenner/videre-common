/*
 * telemetry.js v0.1 alpha
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

var Attitude = function (options) {
    options = options || {};

    this.pitch = options.pitch | 0;
    this.roll = options.roll | 0;
    this.yaw = options.yaw | 0;

    this.x = this.pitch;
    this.y = this.roll;
    this.z = this.yaw;
}

var Position = function (options) {
    options = options || {};

    this.latitude = options.latitude || 0;
    this.longitude = options.longitude || 0;
}

var Telemetry = function (options) {
    options = options || {};
    
    this.speed = options.speed || 0;
    this.attitude = options.attitude || new Attitude();
    this.altitude = options.altitude || 0;
    this.temperature = options.temperature || 0;
    this.heading = options.heading || 0;
    this.vsi = options.vsi || 0;
    this.position = options.position || new Position();
    this.batteryVoltage = options.batteryVoltage || 0;
    this.batteryCharge = options.batteryCharge || 0;
}
