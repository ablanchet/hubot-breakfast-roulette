
/*
 * Access to breakfast API
 */

var auth = function(req, res, next){
	// check cookie
	// if its ok
	next();
	// else return the password view
};
 
var next = function(req, res){
  res.render('modals/next');
};
var done = function(req, res){
  res.render('modals/done');
};
var history = function(req, res){
  res.render('modals/history');
};

exports.maproutes = function(app){	
	app.get('/next', auth, next);
	app.get('/done', auth, done);
	app.get('/history', auth, history);
};