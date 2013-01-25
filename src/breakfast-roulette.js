"use strict";

(function(exports){

	var _participants = [];
	var _history = [];
	
	exports.loadParticipants = function(participants){
		_participants = participants;
	};
	exports.participants = function(){
		return _participants;
	};
	exports.addNewParticipant = function(participant){
		_participants.push(participant);
	};
	exports.history = function(){
		return _history;
	};
	exports.whoIsTheNext = function(){
		// who was the last ? +1
		throw ('not implemented');
	};
	exports.breakfastDone = function(participant){
		if( typeof participants !== 'undefined'){
			// reorganise order of participants
		}
		_history.push({ participant: exports.whoIsTheNext(), date: new Date()});
	};
	exports.cleanHistory = function(){
		_history = [];
	};
	exports.cleanParticipants = function(){
		_participants = [];
	};

}( typeof exports === 'undefined' ? (this.breakfast = {}) : exports ));