var OkDoneVm = function(){
	this.by = '';
};
var LoaderViewModel = function(url, callback){
	var _me = this;
	
	this.loading = ko.observable(false);
	this.load = function(){
		_me.loading(true);
		$.get(url, function(res){
			_me.loading(false);
			callback(res);
		});
	};
};
var HomeVm = function(){
	this.history = new LoaderViewModel('history', function(res){
		$(res).modal().on('hidden', function(){
			$(this).detach();
		});
	});
	this.next = new LoaderViewModel('next', function(res){
		$(res).modal().on('hidden', function(){
			$(this).detach();
		});
	});
	this.done = new LoaderViewModel('done', function(res){
		$(res).modal().on('hidden', function(){
			$(this).detach();
		});
	});
};
$(function(){
	ko.applyBindings(new HomeVm());
});