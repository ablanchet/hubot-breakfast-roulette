"use strict";

(function(exports){

	var _users = [];
	
	exports.setup = function(users){
		_users = users;
	};
	exports.getUsers = function(){
		return _users;
	};

}( typeof exports === 'undefined' ? (this.breakfast = {}) : exports ));