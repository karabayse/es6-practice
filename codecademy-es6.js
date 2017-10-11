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
};

person['hobbies'] = ['horseback riding', 'ice skating', 'hiking'];

console.log(person.hobbies);



// METHODS
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};

console.log(restaurant.openRestaurant());

console.log(restaurant.closeRestaurant());



const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  openRestaurant() {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant() {
    return 'Lock the door, flip the open sign. We are closed.'
  }




  const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: function() {
    if (this.hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.'
    } else {
      return 'Unlock the door, then flip the open sign.'
    }
  }
}

console.log(restaurant.openRestaurant());




// GETTERS AND SETTERS
let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
        console.log(`Change ${newCapacity} to a number.`);
    }
}

// The code below calls the setter method:
// Sets the _seatingCapacity value to 150
restaurant.seatingCapacity = 150;

//The output would be:  150 is valid input.



let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(seatingCapacity) {
      if (typeOf newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  },

get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
  }
}

// In the example above, the getter method (get seatingCapacity()) logs something to the console and returns the value saved to _seatingCapacity. We call the getter method the same way we would access a property without a method:

restaurant.seatingCapacity = 150;
const seats = restaurant.seatingCapacity;

// In this example we set the seatingCapacity to 150, then call the getter method using restaurant.seatingCapacity and save the result to a variable called seats. The getter will also log the following line of code to the console:
// There are 150 seats at Italian Bistro.




// CLASSES
let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console



// CONSTRUCTORS
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }
// Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.
// Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}



// INHERITANCE
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);



// STATIC METHODS
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}
