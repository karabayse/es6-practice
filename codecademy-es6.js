// let orderCount = 0;
//
// const takeOrder = (topping, crustType) => {
//   orderCount += orderCount + 1;
// };
//
// const getSubTotal = (itemCount) => {
//   return itemCount * 7.5;
// }
//
// takeOrder('mushrooms', 'thin crust');
// takeOrder('tomatoes', 'hand-tossed');
// takeOrder('green pepper', 'deep dish');
// console.log(getSubTotal(orderCount));



  let orderCount = 0;

  const takeOrder = (topping, crustType) => {
    orderCount++;
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  };

  takeOrder('mushroom', 'thin crust');
  takeOrder('spinach', 'whole wheat');
  takeOrder('pepperoni', 'brooklyn style');

  const getSubTotal = (itemCount) => {
    return itemCount * 7.5;
  };

  const getTax = () => {
   return getSubTotal(orderCount) * 0.06;
  };

  const getTotal = () => {
    return getSubTotal(orderCount) + getTax();
  };

  console.log(getSubTotal(orderCount));
  console.log(getTotal());



var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);



let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

for (let i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}



let myPlaces = ['Idaho', 'Georgia', 'South Carolina'];

let friendPlaces = ['Wisconsin', 'Nebraska', 'South Carolina'];

for (let i = 0; i < myPlaces.length; i++) {
  for (let j = 0; j < friendPlaces.length; j++) {
		if (myPlaces[i] === friendPlaces[j]) {
      console.log(friendPlaces[j]);
    }
  }
}



// .map iterator
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animals => animals.charAt(0));

console.log(secretMessage);
console.log(secretMessage.join(''));


let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(num => num/100);




// .filter iterator
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallerNumbers =
randomNumbers.filter(function(number) {
  return number.length < 250;
})

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// let longFavoriteWords = favoriteWords.filter(function(word) {
//   return word.length > 7;
// });

// Refactor the code above using arrow function syntax
let longFavoriteWords = favoriteWords.filter(word =>
word.length > 7);
console.log(longFavoriteWords);



let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
// Added "word" as the parameter
console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array  -  "return" not needed with arrow
let interestingWords = words.filter(word =>
  word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it
// "return" not needed with arrow
console.log(interestingWords.every(word =>
  word.length > 5));




let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
// Alternative option is .every()
nums.some(num => num < 0);




let person = {
  name: 'Kara',
  sign: 'Gemini',
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
}

let day = 'Thursday';

let alarm;  // no value assigned

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person.name);
console.log(person['sign']);
console.log(person[alarm]);



let person = {
  name: 'Kara',
  sign: 'Gemini',
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
}

person['hobbies'] = ['horseback riding', 'ice skating', 'hiking'];

console.log(person.hobbies);
