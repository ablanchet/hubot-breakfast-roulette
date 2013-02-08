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
	exports.whoIsNext = function(){
		var nextId = 0;
		if(_history.length > 0){
			nextId = _participants.indexOf(_history[_history.length - 1].participant)+1;
			if(nextId >= _participants.length) nextId = 0;
		}
		return _participants[nextId];
	};
	exports.breakfastDone = function(participant){
		if( typeof participant !== 'undefined'){
			var toMove = _participants.indexOf(participant);
			if( toMove == -1 ) throw 'the given participant is not a participant, the system do not know him yet';
			
			var toReplace = _participants.indexOf(exports.whoIsNext());
			_participants.splice(toMove, 1);
			_participants.splice(toReplace, 0, participant);
		}
		_history.push({ participant: exports.whoIsNext(), date: new Date()});
	};
	exports.clearHistory = function(){
		_history = [];
	};
	exports.clearParticipants = function(){
		_participants = [];
	};

}( typeof exports === 'undefined' ? (this.breakfast = {}) : exports ));