var array = [];
const COLS = 4;
const ROWS = 13

function random(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

function index(row, col) {
    return row * COLS + col;
}
function twoD_get(arr, row, col) {
    return arr[index(row, col)];
}

function twoD_set(arr, row, col, value) {
    return arr[index(row, col)] = value;
    return value;
}

var cards = [];
var cnt = 0;
for(var rows=0; rows<ROWS; rows++) {
    for(var cols=0; cols<COLS; cols++) {
        twoD_set(cards, rows, cols, cnt++);
    }
}

console.log(index(10, 10));
console.log(cards);
console.log(twoD_get(cards, 10, 2));
