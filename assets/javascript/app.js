var questions = [
	question1: {
		'Bart\'s tormentor Jimbo Jones usually appears in a t-shirt with what pictured on it?',
		options: ['Car', 'Skull', 'Eagle', 'Fist'],
		answer: 'skull'},

	question2: {
		'Ned Flanders owns what specialty store?',
		options: ['Bibles Plus', 'Yummy Smoothie Shack', 'The Leftorium', 'Ned\'s Nut Stand'],
		answer: 'The Leftorium'},

	question3: {
		'Which lawyer do the Simpsons always turn to for legal advice?',
		options: ['Lionel Hutz', 'Johnny Jockran', 'Tommy Lawler', 'Ned Flanders'],
		answer: 'Lionel Hutz'},

	question4: {
		'What Springfield regular is almost never seen without his trademark headphones?',
		options: ['Ted', 'Jimbo', 'Otto', 'Moe'],
		answer: 'Otto'},

	question5: {
		'The Channel 6 News helicopter is piloted by what Kent Brockman-hating reporter?',
		options: ['Arnie Pye', 'William Scott', 'Selma', 'Neil Patrick Harris'],
		answer: 'Arnie Pye'},

	question6: {
		'Everyone calls him Grampa, but his first name is what?',
		options: ['John', 'Pavan', 'Paul', 'Abraham'],
		answer: 'Abraham'},

	question7: {
		'The Simpsons live on what street?',
		options: ['Sunshine Street', 'Evergreen Terrace', 'Amherst Place', 'Main Street'],
		answer: 'Evergreen Terrace'},

	question8: {
		'Moe concocts the Flaming Moe with what secret ingredient?',
		options: ['Cough Syrup', 'Love', 'Gasoline', 'Lighter Fluid'],
		answer: 'Cough Syrup'},

	question9: {
		'What is Krusty the Clown\'s birth name?',
		options: ['Bobby Barker', 'Bozo Smitty', 'Abraham Jackson', 'Herschel Krustofski'],
		answer: 'Herschel Krustofski'},

	question10: {
		'In "Bart Gets An Elephant," how does Bart get his elephant?',
		options: ['Lottery Ticket', 'Online Pop-Up Ad', 'Radio Contest', 'Traded Dog'],
		answer: 'Radio Contest'}
	};]

	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        seconds = parseInt(600);
		display.text(seconds);
		if (timer == 0) {
            alert('Time is over.');
        }
}

jQuery(function ($) {
    var 60seconds = 60
        display = $('#time');
    startTimer(60seconds, display);
});