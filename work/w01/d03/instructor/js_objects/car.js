var car = {
  make: "benz",
  model: "sedan",
  year: 2015,
  color: "black",
  mileage: 25,
};



function Car(make, model, year, color, mileage) {
  this.make= make;
  this.model = model;
  this.year= year;
  this.color= color;
  this.mileage= mileage;
  this.honk= function()
  {console.log("Beep Beep");
  };

  Car.prototype.drive = function(miles){
    if (mileage + miles < mileage) return[console.log("Invalid!")];

    else if (mileage + miles > 0)
      return [mileage= mileage+ miles];
  };
}

var car = new Car ('benz', 'sedan', 2015, 'black', 25);

var luxuryCar = new Car ('bmw', 'coupe', 2016, 'red', 30);
