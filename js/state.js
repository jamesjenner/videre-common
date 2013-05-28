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

State.STATE_UNKNOWN = "unknown";
State.STATE_UNINIT = "uninitialised";
State.STATE_BOOTING = "booting";
State.STATE_CALIBRATING = "calibrating";
State.STATE_STANDBY = "standby";
State.STATE_ACTIVE = "active";
State.STATE_CRITICAL = "critical";
State.STATE_EMERGANCY = "emergancy";
State.STATE_SHUTINGDOWN = "shuttingDown";

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
