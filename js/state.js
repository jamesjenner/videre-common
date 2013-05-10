/*
 * state.js
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

// "use strict"

if(typeof module == "undefined"){
    var module = function(){};
    var exports = this['state'] = {};
    module.exports = exports;
}

module.exports = State;

State.STATE_UNKNOWN = -1;

// TODO: see how to merge the types of state

// the following are used by parrot ar drone
State.STATE_LANDED = 0;
State.STATE_LANDING = 1;
State.STATE_TAKING_OFF = 2;
State.STATE_HOVERING = 3;
State.STATE_ABORTED = 4;
State.STATE_FLYING = 5;
State.STATE_TEST_MODE = 6;
State.STATE_IDLE = 7;
State.STATE_AUTONOMOUS = 7;

// the following are used by mavlink
State.STATE_UNINIT = 8;
State.STATE_BOOTING = 9;
State.STATE_CALIBRATING = 10;
State.STATE_STANDBY = 11;
State.STATE_ACTIVE = 12;
State.STATE_CRITICAL = 13;
State.STATE_EMERGANCY = 14;
State.STATE_SHUTINGDOWN = 15;

function State(options) {
    options = options || {};

    this.state = ((options.state != null) ? options.state : State.STATE_UNKNOWN);
    this.armed = ((options.armed != null) ? options.armed : false);
    this.autonomous = ((options.autonomous != null) ? options.autonomous : false);
    this.testMode = ((options.testMode != null) ? options.testMode : false);
    this.stabilized = ((options.stabilized != null) ? options.stabilized : false);
    this.hardwareInLoop = ((options.hardwareInLoop != null) ? options.hardwareInLoop : false);
    this.remoteControl = ((options.remoteControl != null) ? options.remoteControl : false);
    this.guided = ((options.guided != null) ? options.guided : false);
}
