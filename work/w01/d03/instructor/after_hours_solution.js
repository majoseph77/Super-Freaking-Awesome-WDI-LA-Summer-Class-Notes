/*
 * # After Hours
 * 
 * ## Design and Create a `Car`
 * 
 * Design and create a `Car` constructor function for a car object that:
 * 
 * - Has a `make` property
 * - Has a `model` property
 * - Has a `year` property
 * - Has a `color` property
 * - Has a `mileage` property
 * - Has a `honk` method that `console.logs` "Beep, beep!".
 * - Has a `drive` method that will accept an argument of the number of miles 
 *   to add to the `mileage`. Ensure that the argument is not negative - it's 
 *   illegal to roll back odometers!
 * 
 * Create several car objects passing in different values as arguments, call 
 * their methods and examine their properties.
 * 
 */

function Car(make, model, year, color, mileage) {
  this.make    = make;
  this.model   = model;
  this.year    = year;
  this.color   = color;
  this.mileage = mileage;

  this.honk = function() {
    console.log("beep, beep");
    return true;
  };

  this.drive = function(miles) {
    if (miles < 0) {
      console.log("You can't roll back the odometer!");
      return false; // it didn't work!
    } else {
      // the same as:
      // this.mileage = this.mileage + miles; // update mileage
      // return this.mileage;                 // return the new mileage!
      return this.mileage += miles;  
    }
  };
}

// tests!

var rav4     = new Car("Toyota", "RAV4", 1999, "black", 203305);
var infiniti = new Car("Infiniti", "J30", 1995, "cream", 120022);

console.log(rav4.make);
console.log(rav4.model);
console.log(rav4.year);
console.log(rav4.color);
rav4.honk();

console.log(infiniti.mileage);
infiniti.drive(2792);
console.log(infiniti.mileage);
