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
    this.sequence = options.sequence || 0;
    this.altitude = options.altitude || 0;
    this.isHome = ((options.isHome != null) ? options.isHome : false);
    this.loiter = ((options.loiter != null) ? options.loiter : false);
    this.loiterTime = options.loiterTime || 0;
    this.loiterRadius = options.loiterRadius || 0;
    this.terminus = ((options.terminus != null) ? options.terminus : false);
}
