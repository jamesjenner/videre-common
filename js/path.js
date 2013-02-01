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
    var Point = require('./point');
}

module.exports = Path;

function Path(options) {
    options = options || {};

    this.points = options.points || new Array();
}

/* 
 * length()   returns the length of the path, based on the number of points
 *
 */
Path.prototype.length = function() {
    if(!this.points) {
	return 0;
    } else {
	return this.points.length;
    }
}

/* 
 * getPoint()   returns the specified point on the path
 *
 */
Path.prototype.getPoint = function(i) {
    if(!this.points || this.points.length <= i) {
	return null;
    } else {
	return this.points[i];
    }
}

/* 
 * isEmpty()   returns true if no points exist on the path, otherwise false
 *
 */
Path.prototype.isEmpty = function() {
    return !(this.points && this.points.length > 0);
}

/* 
 * insert(number, lat, lng, options)   inserts a point at the specified number within the path
 *
 * Will appened if the number larger than the number of points
 */
Path.prototype.insert = function(idx, lat, lng, options) {

    if(idx >= this.points.length) {
	this.append(lat, lng, options);
    } else {
	// create the point
        var point = new Point(lat, lng, options);

	// splice in the new point
        this.points.splice(idx, 0, point);

	this.points = reorder(idx, this.points);
    }
}

/* 
 * append(lat, lng)   adds a point to the end of the path
 */
Path.prototype.append = function(lat, lng, options) {
    var point = new Point(lat, lng, options);
    point.sequence = this.points.length;
    this.points[this.points.length] = point;
}

/* 
 * toArray()   returns the current path as an array of the points where each entry is an array of lat, lng
 */
Path.prototype.toArray = function() {
    var array = new Array();

    for(var i = 0, l = this.points.length; i < l; i++) {
	array.push([this.points[i].position.latitude, this.points[i].position.longitude]);
    }

    return array;
}

/* 
 * delete(idx)   removes an existing point from the path
 */
Path.prototype.delete = function(idx) {
    if(idx < this.points.length) {
	this.points.splice(idx, 1);

	this.points = reorder(idx - 1, this.points);
    }
}

/* 
 * updatePointPos(idx, lat, lng)   update the position of a point on the path
 */
Path.prototype.updatePointPos = function(idx, lat, lng) {
    if(idx < this.points.length) {
	this.points[idx].position.latitude = lat;
	this.points[idx].position.longitude = lng;
    }
}

/* 
 * replacePoint(idx, point)   replaces the point on the path for the specified position
 */
Path.prototype.replacePoint = function(idx, point) {
    if(idx < this.points.length) {
	point.sequence = idx;
	this.points[idx] = point;
    }
}

var reorder = function(from, points) {
    from = from || 0;

    for(i = from, l = points.length; i < l; i++) {
	points[i].sequence = i;
    }

    return points;
}
