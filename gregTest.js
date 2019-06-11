import * as greg from './greg.js';

var randomInputs = [[0, 1], [9, 100], [-10, 10]];
var hasErrors = true;

function testRandomPositive() {
	for (var i = 0; i < randomInputs.length; i++) {
		for (var j = 0; j < 100; j++) {
			var result = greg.random(randomInputs[i][0], randomInputs[i][1]);
			if (result < randomInputs[i][0] || result > randomInputs[i][1]) {
				console.error(`ERROR: random(${randomInputs[i][0]},${randomInputs[i][1]}) ==> ${result}`);
				hasErrors = true;
			}
		}
	}
}
testRandomPositive();
if (hasErrors){ 
	console.error("Errors were found");
} else {
	console.log("Ran without errors.");
}
