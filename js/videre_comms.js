/*
 * videre_comms.js v0.1 alpha
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

var MSG_UNKNOWN = '__unknown';
var MSG_ADD_VEHICLE = 'addVehicle';
var MSG_DELETE_VEHICLE = 'deleteVehicle';
var MSG_UPDATE_VEHICLE = 'updateVehicle';
var MSG_GET_VEHICLES = 'getVehicles';
var MSG_VEHICLES = 'vehicles';

var MSG_VEHICLE_TELEMETERY = 'vehicleTelemetery';
var MSG_GET_TELEMETERY = 'getVehicleTelemetery';

var MSG_AUTHENTICATE = 'authenticate';
var MSG_AUTHENTICATION_ACCEPTED = 'authenticationAccepted';
var MSG_AUTHENTICATION_REJECTED = 'authenticationRejected';
var MSG_CHANGE_PWD = 'changePwd';

var MSG_SESSION = 'session';
var MSG_SESSION_CONFIRMED = 'sessionConfirmed';
var MSG_REQUEST_SESSION = 'requestSession';

var MSG_VEHICLE_PAYLOAD = 'vehiclePayload';
var MSG_GET_PAYLOAD = 'getVehiclePayload';

var MSG_CMD_EMERGENCY_STOP = 'cmdAbort';
var MSG_CMD_LEFT = 'cmdLeft';
var MSG_CMD_RIGHT = 'cmdRight';
var MSG_CMD_TURN_LEFT = 'cmdTurnLeft';
var MSG_CMD_TURN_RIGHT = 'cmdTurnRight';
var MSG_CMD_FORWARD = 'cmdForward';
var MSG_CMD_REVERSE = 'cmdReverse';
var MSG_CMD_UP = 'cmdUp';
var MSG_CMD_DOWN = 'cmdDown';

Message = function (data) {
    data = data || {};
	     
    this.id = data.id || MSG_UNKNOWN;
    this.body = data.body || null;
};

/* 
 * deconstruct a message 
 */
Message.deconstructMessage = function(jsonData) {
    var obj = JSON.parse(jsonData);

    // initialise in case it wasn't sent
    obj.body = obj.body || 'null';

    // always parse, presuming it's JSON
    obj.body = JSON.parse(obj.body);

    return new Message(obj);
};

/* 
 * Constructs a message based on an id and data, while converting the data to a JSON string
 *
 */
Message.constructMessage = function(id, data) {
    return JSON.stringify({id: id, body: JSON.stringify(data)});
};

