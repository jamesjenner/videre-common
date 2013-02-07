/*
 * attitude.js
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
    var exports = this['attitude'] = {};
    module.exports = exports;
}

module.exports = Attitude;

function Attitude(options) {
    options = options || {};

    this.pitch = options.pitch === undefined ? 0 : options.pitch;
    this.roll = options.roll === undefined ? 0 : options.roll;
    this.yaw = options.yaw === undefined ? 0 : options.yaw;

    this.x = this.pitch;
    this.y = this.roll;
    this.z = this.yaw;
}
