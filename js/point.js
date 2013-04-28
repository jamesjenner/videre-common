/*
 * point.js
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
    var exports = this['point'] = {};
    module.exports = exports;
}
if (typeof require != "undefined") {
    var Position = require('./position');
}

module.exports = Point;

function Point(lat, lng, options) {
    options = options || {};

    this.position = new Position(lat, lng);
    this.stop = options.stop === undefined ? false : options.stop;
    this.start = options.start === undefined ? false : options.start;
    this.sequence = options.sequence === undefined ? 0 : options.sequence;
    this.altitude = options.altitude === undefined ? 0 : options.altitude;
    this.isHome = options.isHome === undefined ? false : options.isHome;
    this.loiter = options.loiter === undefined ? false : options.loiter;
    this.autoContinue = options.autoContinue === undefined ? true : options.autoContinue;
    this.accuracy = options.accuracy === undefined ? 0 : options.accuracy;
    this.current = options.current === undefined ? false : options.current;
    this.yaw = options.yaw === undefined ? 0 : options.yaw;
    this.pitch = options.pitch === undefined ? 0 : options.pitch;
    this.loiterTime = options.loiterTime === undefined ? 0 : options.loiterTime;
    this.loiterRadius = options.loiterRadius === undefined ? 0 : options.loiterRadius;
    this.loiterLaps = options.loiterLaps === undefined ? 0 : options.loiterLaps;
    this.returnHome = options.returnHome === undefined ? false : options.returnHome;
    this.terminus  = options.terminus  === undefined ? false : options.terminus ;
}
