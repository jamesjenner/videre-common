/*
 * util.js
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
    var exports = this['util'] = {};
    module.exports = exports;
}

module.exports = Util;

function Util() {
}

Util.recurseMerge = function(primary, overwrite) {
    var p;

    for(p in overwrite) {
	try{
	    // this stops from creating attributes on primary that do not exist on primary
	    if(typeof primary[p] !== 'undefined') {
		// try an update
		if(overwrite[p].constructor == Object) {
		    primary[p] = recurseMerge(primary[p], overwrite[p]);
		} else {
		    primary[p] = overwrite[p];
		}
	    }
	} catch(e) {
	    // destination doesn't have that property, create and set it
	    primary[p] = overwrite[p];
	}
    }

    // primary is modified (it's a reference), but pass it back
    // to keep up the idea that this function returns a result
    return primary;
};
