var name = window.prompt("Please input your name");
var nameBase = ["Philip","Phil","PJ"];

var nameIsInNameBase = function(name, nameBase) {
  for (var i = 0; i < nameBase.length; i++) {
    if (nameBase[i] === name) {
      return true;
    }
  }

  return false;
}

if (nameIsInNameBase(name, nameBase)) {
  window.alert("Please enter");
  console.log("Please enter");
} else {
  window.alert("No entry!");
  console.log("No entry!");
}

var time = 8;
var name = window.prompt("Please input your name");

if (name === "Phil" || name === "Philip") {
  window.alert("Please enter");
  console.log("Please enter");
} else if(time === 8) {
  window.alert("zzzzzzzz");
  console.log("zzzzzzzz");  
} else {
  window.alert("No entry!");
  console.log("No entry!");
}


// var car1 = {
//   make:  "Toyota",
//   model: "RAV4"
// };

// var car2 = {
//   make:  "Toyota",
//   model: "RAV4"
// };

// var Car = function(make, model) {
//   this.make  = make;
//   this.model = model;
// };

var quantity = 1;// write a number here

if (quantity > 1) {
  console.log(quantity + " pets");
} else if(quantity === 1) {
  console.log(quantity + " pet");
} else {
  console.log("no pets");  
}


var premiumStr = "you may sit in the first 3 rows";
var nonPremiumStr = "you may sit in any row behind 3.";

var name = "Phil"; // hard-coded for now
var section = "middle"; // TODO: figure out a way to translate name to section

var sectionStr = "You are in section " + section + "; ";
var ticketType = window.prompt("What type of ticket do you have?");

if (ticketType === "premium") {
  var ticketStr = sectionStr + premiumStr;
} else {
  var ticketStr = sectionStr + nonPremiumStr;
}

console.log(ticketStr);



