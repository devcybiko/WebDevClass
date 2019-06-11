// Greg's Tool Kit

/**
  * random(min, max)
  * - returns a random integer between min and max, inclusive
  * - min - the lower limit of the random number to be returned
  * - max - the upper limit of the random number to be returned
  * Example: 
  * var cointoss = random(1,2); // returns either 1 or 2
  * var dndDice = random(1,20); // a dungeons and dragons 20-sided die
  * var images = ["image0", "image1", "image2" ... "image49"]; // note: 50 images
  * var randomImage = images[random(0, 49)]; // select random image note: index is 0-49 (not 1-50)
**/

export function random(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}
