test('check users', function(){
	var users = ['toto', 'titi', 'tutu'];
	
	breakfast.setup(users);
	ok(breakfast.getUsers() === users);
});