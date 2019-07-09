function random(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
}

function foo(n) {
	return Math.sign(secret-n);
}

function badWay() {
	//console.log(`\nBAD METHOD`);
	for(var guess=0; guess<65536; guess++) {
		if (foo(guess) === 0) {
			//console.log(`I GUESSED IT (${guess}) in ${guess+1} guesses!`);
			return guess+1;
		}
	}
	//console.error(`I never figured it out :( - ${secret}`);
}

function fastWay() {
	let high=65536;
	let low = 0;

	//console.log(`\nFAST METHOD`);
	let guesses = 0;
	while(true) {
		guesses++;
		let guess = Math.floor((high+low)/2);
		if (guesses > 20) {
			console.log(`guess#: ${guesses} high=${high}`);
			console.log(`guess#: ${guesses} low=${low}`);
			console.log(`guess#: ${guesses} guess=${guess}`);
			console.log(`guess#: ${guesses} secret=${secret}`);
			return guesses;
		}

		let diff = foo(guess);
		if (diff === -1) {
			// too low
			high = guess;
		} else if (diff === 1) {
			//too high
			low = guess;
		} else {
			//console.log(`I GUESSED IT (${guess}) in ${guesses} guesses!`);
			return guesses;
		}
	}
}

var iterations = 100000;
var step = 10000;
var badGuesses = 0;
var fastGuesses = 0;

var badTime = new Date();
for (var i=0; i<iterations; i++) {
	if (i % step === 0) console.log(`#${i}`);
	var secret=random(0, 65535);
	badGuesses += badWay();
}
badTime = (new Date()).getTime() - badTime.getTime();

var goodTime = new Date();
for (var i=0; i<iterations; i++) {
	if (i % step === 0) console.log(`#${i}`);
	var secret=random(0, 65535);
	fastGuesses += fastWay();
}
goodTime = (new Date()).getTime() - goodTime.getTime();

console.log(`${iterations} Games Played`);
console.log(`bad way = ${badGuesses/iterations} guesses on average in ${badTime/1000}secs (${badTime/iterations}secs per game)`);
console.log(`fast way = ${fastGuesses/iterations} guesses on average in ${goodTime/1000}secs (${goodTime/iterations}secs per game))`);
