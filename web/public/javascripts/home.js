var OkDoneVm = function(){
	this.by = '';
};
var LoaderViewModel = function(url, callback){
	var _me = this;
	
	this.loading = ko.observable(false);
	this.load = function(){
		// do something with the url
		_me.loading(true);
		setTimeout(function(){
			_me.loading(false);
			callback();
		}, 1000);
	};
};
var HomeVm = function(){
	this.history = new LoaderViewModel('', function(){
		console.log('history');
	});
	this.next = new LoaderViewModel('', function(){
		console.log('next');
	});
	this.done = new LoaderViewModel('', function(){
		console.log('done');
	});
};
$(function(){
	ko.applyBindings(new HomeVm());
});