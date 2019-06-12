# GREG'S WEB DEV SUPPORT FILES

## Activities
These are Greg's answers to some of the Activities.
Notice that there are some "test" functions in here. Later, we'll learn about various Test Harnesses that will check our code to make sure it works.

### gregcalc
Greg's solutions to the Calculator activity
There are three different methods of computing the calc result:
1. If-Hydra
2. Object dispatcher
3. eval()

### FixBuzz
Here are three student's versions of FizzBuzz - a common interview challenge.
Plus, a one-line FizzBuzz solution that will blow your mind!

### RPSLX - Rock Paper Scissors Lizard Spock
1. rps-solved.html - the if-hydra solution
2. rps-greg.html - Greg's five-line solution to the if-hydra
3. rpslx-solved.html - an extension to the if-hydra to add 'lizard' and 'spock'
4. rpslx-greg.html - Greg's one-line change that allows you to play RPSLX

### MissingCard
Greg's solution to the missing card activity.
The algorithm is to convert the card to an 'ordinal' value.
* diamonds = '0-12'
* hearts = '13-25'
* clubs='26-38'
* spades='39-51'

Then, for each suit, we add the card's ordinal (A=0..King=12).
This gives us a value from 0-51 which represents each card.
Pay particular attention to how we calculate the card's value in cardOrdinal() and then convert it back to a card in toCard().

## Examples
* gregArrayMath.js - shows how to do array math using a one-dimensional array to hold values for a two-dimensional array.

## ToolKit
1. greg.js - a collection of JavaScript functions that you may find useful
2. gregTest.js - a simple test framework to verify the functions work
3. To run the tests run `runtests.sh`

### ToolKit Notes
1. Needs node.js version 12+
2. Warning message is normal: (node:14003) ExperimentalWarning: The ESM module loader is experimental.
3. If all goes well a message will display: Ran without errors.
4. If there are errors a message will display: Errors were found