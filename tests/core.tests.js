module('participants');
test('load and check participants', function(){
	var participant = ['toto', 'titi', 'tutu'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.participants() === participant);
});
test('add and check participants', function(){
	var participant = ['toto', 'titi', 'tutu'];
	
	breakfast.loadParticipants(participant);
	breakfast.addNewParticipant('tata');
	strictEqual(4, breakfast.participants().length);
	deepEqual(['toto', 'titi', 'tutu', 'tata'], breakfast.participants());
});