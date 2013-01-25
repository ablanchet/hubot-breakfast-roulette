var defaultTeardown = {
	teardown: function() {
		breakfast.clearHistory();
		breakfast.clearParticipants();
	}
};
module('participants', defaultTeardown);
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

module('management', defaultTeardown);
test('normal workflow', function(){
	var participant = ['A', 'B', 'C', 'D'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'D');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
});
test('normal workflow with one participant', function(){
	var participant = ['A'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'A');
});
test('worflow with replacement', function(){
	var participant = ['A', 'B', 'C', 'D'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone('D');
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'D');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
});
test('worflow with replacement of the first', function(){
	var participant = ['A', 'B', 'C', 'D'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone('B');
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'D');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'D');
});
test('worflow with replacement of the last', function(){
	var participant = ['A', 'B', 'C', 'D'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
	breakfast.breakfastDone('D');
	ok(breakfast.whoIsNext() === 'C');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'A');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'B');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'D');
	breakfast.breakfastDone();
	ok(breakfast.whoIsNext() === 'C');
});
test('try to insert not participant', function(){
	var participant = ['A', 'B', 'C', 'D'];
	
	breakfast.loadParticipants(participant);
	ok(breakfast.whoIsNext() === 'A');
	throws( function(){ breakfast.breakfastDone('E') });
});

module('history', defaultTeardown);
test('check history', function(){
	var participant = ['A', 'B', 'C', 'D'];
	
	breakfast.loadParticipants(participant);
	breakfast.breakfastDone();
	breakfast.breakfastDone();
	breakfast.breakfastDone();
	breakfast.breakfastDone();
	breakfast.breakfastDone();
	
	ok(breakfast.history().length == 5);
	console.log(breakfast.history());
});