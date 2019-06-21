suits = ["diamonds", "clubs", "hearts", "spades"];
titles = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

function random(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * convert a card to a number from 0-51
 * @param {} card 
 */
function cardOrdinal(card) {
    var suit = card.suit;
    var title = card.title;
    var iSuit = suits.indexOf(suit);
    var iTitle = titles.indexOf(title);
    return (iSuit * titles.length) + iTitle;
}

function toCard(ord) {
    var suit = Math.floor(ord / 13); 
    var title = ord % 13;
    return {title: titles[title], suit: suits[suit]}
}

function testCardOrdinal() {
    var expectedValue = 0;
    for(var iSuit in suits) {
        var theSuit = suits[iSuit];
        for (var iTitle in titles) {
            var theTitle = titles[iTitle];
            var testCard = {title: theTitle, suit: theSuit};
            var testValue = cardOrdinal(testCard);
            if (testValue != expectedValue) {
                console.error(`ERROR: ${testCard} expected ${expectedValue} but got ${testValue}`);
            }
            expectedValue++;
        }
    }
}

function generateDeck() {
    var deck = [];
    for(var iSuit in suits) {
        var theSuit = suits[iSuit];
        for (var iTitle in titles) {
            var theTitle = titles[iTitle];
            deck.push({title: theTitle, suit: theSuit});
        }
    }
    return deck;
}

function removeCard(deck) {
    var cardToRemove = random(0, 51);
    var removedCard = deck[cardToRemove];
    deck.splice(cardToRemove, 1);
    return removedCard;
}

function sumDeck(deck) {
    var sum = 0;
    for(var i in deck) {
        var card = deck[i];
        var ord = cardOrdinal(card);
        sum += ord;
    }
    return sum
}

//testCardOrdinal(); - just a function to test the cardOrdinal() function

var deck = generateDeck();
var oldSum = sumDeck(deck);
var removedCard = removeCard(deck);
var newSum = sumDeck(deck);
console.log(`the oldSum=${oldSum} and the newSum=${newSum}`);
var diff = oldSum - newSum;
console.log(`the difference between them: ${diff}`);
console.log(`           My guess: ${toCard(diff).title} of ${toCard(diff).suit}`);
console.log(`Actual removed card: ${removedCard.title} of ${removedCard.suit}`);