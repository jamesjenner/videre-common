/*
 * message.js
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
    var exports = this['message'] = {};
    module.exports = exports;
}

module.exports = Message;

Message.UNKNOWN = '__unknown';
Message.ADD_VEHICLE = 'addVehicle';
Message.DELETE_VEHICLE = 'deleteVehicle';
Message.UPDATE_VEHICLE = 'updateVehicle';
Message.UPDATE_NAV_PATH = 'updateNavPath';
Message.NAV_PATH_UPDATED = 'navPathUpdated';
Message.NAV_PATH_SET_TARGETED = 'navPathSetTargeted';
Message.NAV_PATH_WAYPOINT_ACHIEVED = 'navPathWaypointAchieved';
Message.NAV_PATH_REFRESH = 'navPathRefresh';
Message.GET_VEHICLES = 'getVehicles';
Message.VEHICLES = 'vehicles';
Message.VEHICLE_COMMS = 'vehicleComms';

Message.VEHICLE_DEVICE_TYPES = 'vehicleDeviceTypes';

Message.DRONES = 'drones';

Message.AUTHENTICATE = 'authenticate';
Message.AUTHENTICATION_ACCEPTED = 'authenticationAccepted';
Message.AUTHENTICATION_REJECTED = 'authenticationRejected';
Message.CHANGE_PWD = 'changePwd';

Message.SESSION = 'session';
Message.SESSION_CONFIRMED = 'sessionConfirmed';
Message.REQUEST_SESSION = 'requestSession';

Message.COMMS_TYPE_SECURE_ONLY = 'secureOnly';
Message.COMMS_TYPE_UNSECURE_ONLY = 'unsecureOnly';
Message.COMMS_TYPE_MIXED = 'mixed';

Message.VEHICLE_PAYLOAD = 'vehiclePayload';
Message.GET_PAYLOAD = 'getVehiclePayload';

Message.VEHICLE_STATE = 'vehicleState';
Message.VEHICLE_STATUS_MSG = 'vehicleStatusMsg';
Message.CURRENT_POSITION = 'currentPosition';
Message.VEHICLE_TELEMETRY = 'vehicleTelemetry';
Message.VEHICLE_TELEMETRY_ON = 'vehicleTelemetryOn';
Message.VEHICLE_TELEMETRY_OFF = 'vehicleTelemetryOff';

Message.VEHICLE_RESET = 'vehicleReset';
Message.VEHICLE_DISCONNECT = 'vehicleDisconnect';
Message.VEHICLE_CONNECT = 'vehicleConnect';
Message.VEHICLE_RECONNECT = 'vehicleReconnect';

Message.VEHICLE_CONNECTING = 'vehicleConnecting';
Message.VEHICLE_CONNECTED = 'vehicleConnected';
Message.VEHICLE_DISCONNECTING = 'vehicleDisconnecting';
Message.VEHICLE_DISCONNECTED = 'vehicleDisconnected';
Message.VEHICLE_RECONNECTING = 'vehicleReconnecting';

Message.VEHICLE_LANDED = 'vehicleLanded';
Message.VEHICLE_LANDING = 'vehicleLanding';
Message.VEHICLE_LAUNCHING = 'vehicleLaunching';
Message.VEHICLE_LAUNCHED = 'vehicleLaunched';

Message.CMD_ARM = 'cmdArm';
Message.CMD_DISARM = 'cmdDisarm';
Message.CMD_SHUTDOWN = 'cmdShutdown';

Message.CMD_EMERGENCY_STOP = 'cmdAbort';
Message.CMD_LEFT = 'cmdLeft';
Message.CMD_RIGHT = 'cmdRight';
Message.CMD_TURN_LEFT = 'cmdTurnLeft';
Message.CMD_TURN_RIGHT = 'cmdTurnRight';
Message.CMD_FORWARD = 'cmdForward';
Message.CMD_REVERSE = 'cmdReverse';
Message.CMD_UP = 'cmdUp';
Message.CMD_DOWN = 'cmdDown';

Message.CMD_ON = 'cmdOn';
Message.CMD_OFF = 'cmdOff';

Message.CMD_LAND = 'cmdLand';
Message.CMD_LAUNCH = 'cmdLaunch';

function Message(data) {
    data = data || {};
	     
    this.id = data.id === undefined ? Message.UNKNOWN : data.id;
    this.body = data.body === undefined ? null : data.body;
};

/* 
 * deconstruct a message 
 */
Message.deconstructMessage = function(jsonData) {
    var obj = JSON.parse(jsonData);

    // initialise in case it wasn't sent
    obj.body = obj.body === undefined ? 'null' : obj.body;

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

