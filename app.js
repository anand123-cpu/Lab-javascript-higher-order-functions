//Array slice
var foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
var modifiedFood = foods.slice(1,4);
console.log(modifiedFood)

//Array splice
var foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'];
var modifiedFood = foods.splice(2,0,"noodles","icecream");
console.log(foods)

// Filter
//To find prime numbers within an array
var numberArray = [12,324,213,4,2,3,45,4234];
var prime = numberArray.filter(function(isPrime)
{
    for (var i = 2; i <= Math.sqrt(isPrime); i++) {
        if (isPrime % i === 0) return false;
      }
      return true;
 });
 console.log(prime)

//To find even numbers within an array
var even = numberArray.filter(function(isEven)
{
    return isEven%2==0;
})
console.log(even);

//Reject
var nonPrime = numberArray.filter(function(nonPrime)
{
    for (var i =2 ; i<=Math.sqrt(nonPrime); i++) {
        if (nonPrime % i == 0) return true;
      }
      return false;
 });
 console.log(nonPrime)

//Lambda function
var numberArray = [12,324,213,4,2,3,45,4234];
function isEven()
{
    numberArray%2==0
}
var even = numberArray.filter((numberArray) => numberArray%2==0)
console.log(even);

//Map
var myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers()
{
    square = square**2;
}
var square = myArray.map((square) => square**2)
console.log(square);

//Reduce
var myArray = [2, 3, 5, 10]
var multiply= myArray.reduce(function(initial,item)
{
    return initial*item;
});
console.log(multiply)
