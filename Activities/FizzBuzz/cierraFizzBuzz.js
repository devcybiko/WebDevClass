var arr = [];
 for (var i = 1; i < 101; i++){
   if(i % 5 === 0 && i%3 === 0){
     arr.push(“FizzBuzz”);
   }
   else if(i % 5 === 0){
     arr.push(“Buzz”);
   }
   else if(i % 3 === 0){
     arr.push(“Fizz”);
   }
   else {
     arr.push(i);
   }
 }
console.log(arr);