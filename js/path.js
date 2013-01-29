/*
 * path.js
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
    var exports = this['path'] = {};
    module.exports = exports;
}
if (typeof require != "undefined") {
    var Position = require('./point');
}

module.exports = Path;

function Path(options) {
    options = options || {};

    this.points = options.points || new Array();
}

/* 
 * insert(number, point)   inserts a point at the specified number within the path
 *
 * Will appened if the number larger than the number of points
 */
Path.prototype.insert = function(idx, point) {
    if(idx >= this.points.length) {
	this.append(point);
    } else {
        // TODO: add insert logic
	reorder(idx);
    }
}

/* 
 * append(point)   adds a point to the end of the path
 */
Path.prototype.append = function(point) {
    point.sequence = this.points.length;
    this.points[this.points.length] = point;
}

/* 
 * delete(idx)   removes an existing point from the path
 */
Path.prototype.delete = function(idx) {
    if(idx < this.points.length) {
	this.points.splice(idx, 1);

	reorder(idx);
    }
}

/* 
 * update(point)   update a point on the path
 */
Path.prototype.update = function(idx, point) {
    if(idx < this.points.length) {
	point.sequence = idx;
	this.points[idx] = point;
    }
}

var reorder = function(from) {
    from = from || 0;

    for(i = from, l = this.points.length; i < l; i++) {
	this.points[i].sequence = i;
    }
}
