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

    this.pitch = ((options.pitch != null) ? options.pitch : 0);
    this.roll = ((options.roll != null) ? options.roll : 0);
    this.yaw = ((options.yaw != null) ? options.yaw : 0);

    this.x = this.pitch;
    this.y = this.roll;
    this.z = this.yaw;
}
