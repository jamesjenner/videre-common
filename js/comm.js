/*
 * comm.js
 *
 * Copyright (c) 2013 James G Jenner
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

if (typeof module == "undefined"){
    var module = function(){};
    var exports = this['comm'] = {};
    module.exports = exports;
}

module.exports = Comm;

Comm.TYPE_SERIAL = 'Serial';
Comm.TYPE_TCP = 'Tcp';

function Comm(options) {
    options = options || {};

    this.id = options.id;
    this.autoDiscover = ((options.autoDiscover != null) ? options.autoDiscover : false);
    this.multiVehicle = ((options.multiVehicle != null) ? options.multiVehicle : false);
    this.connectionType = ((options.connectionType != null) ? options.connectionType : Comm.TYPE_SERIAL);
    this.networkAddress = ((options.networkAddress != null) ? options.networkAddress : '');
    this.networkPort = ((options.networkPort != null) ? options.networkPort : '');
    this.serialPort = ((options.serialPort != null) ? options.serialPort : '');
    this.baudRate = ((options.baudRate != null) ? options.baudRate : '57600');
}

Comm.prototype.equals = function(c1) {
    if(c1.id != null && this.id != null && c1.id === this.id) {
	return true;
    }

    if(c1.connectionType === this.connectionType) {
	if(c1.connectionType === Comm.TYPE_SERIAL) {
	    if(c1.serialPort === this.serialPort) {
                return true;
	    }
	} else {
	    if(c1.networkAddress === this.networkAddress && c1.networkPort === this.networkPort) {
                return true;
	    }
	}
    }

    return false;
}

Comm.prototype.toText = function() {
    var txt = '';
    if(this.connectionType === Comm.TYPE_SERIAL) {
	txt += "Serial " + this.serialPort + " baud: " + this.baudRate;
    } else {
	txt += "Network " + this.networkAddress + ":" + this.networkPort;
    }

    return txt;
}
