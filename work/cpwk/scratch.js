




var name = window.prompt ("Please input your name");
var nameBase= ["Phil", "Philip", "PJ"]

var nameIsInNameBase = function(name, nameBase)
for (var i=0; i<nameBase.length; i++){
  if(nameBase[i] === name) {
    return true;
  }
}
return false;
}
if(nameIsInNameBase(name, nameBase)){
  window.alert("Please Enter");
  console.log("Please Enter");
  break;

  }
}
window.alert("No ENtry");
  console.log("No ENtry");


// if (name === nameBase) {
//   window.alert("Please Enter");
//   console.log("Please Enter");

// } else {
//   window.alert("No ENtry");
//   console.log("No ENtry");

}

// var time = 8;

// var name = window.prompt ("Please input your name");

// if (name === "Phil" || name === "Philip") {
//   window.alert("Please Enter");
//   console.log("Please Enter");
// } else if(time === 8) {
//   window.alert("zzzzzzzz");
//   console.log("zzzzzzz");
// } else {
//   window.alert("No Entry");
//   console.log("No Entry");

// }



// 1. Use conditionals to check if a hardcoded number is `odd` or `even`, and then `console.log` the number is `odd` or `even` with the numbers value.

//   ```
//   var num = ;// write a number here

//   // write your conditions here

//   ```

// var num =;


// var number = window.prompt ("Please enter a number 1-10");

// if (num % 2 === 0) {
//   window.alert("even" + num);
//   console.log("even" + num);
// } else  {
//   window.alert("odd"+ num);
//   console.log("odd" + num);
// }




4. There is an event where guests will be sitting in three sections based on their
names: "left", "middle", and "right".
If they have a premium ticket they can sit in first `3` rows in their section,
 otherwise they can take any seat behind row 3.
 Using hardcoded variables for `name` and `ticketType`
 print out appropriate seating instructions.


// var name = "left", "middle", "right";
// var ticketType= "premium", "regular";

// if (name === "left" && ticket === "premium" ) {
//   console.log("Please sit in the first 3 rows in the left section");
// } else if (name === "left" && ticket === "regular" ) {
//   console.log("Please sit behind row 3 in left section");
// } else if (name === "middle" && ticket === "premium") {
//   console.log("Please sit in first 3 rows in middle section");
// } else if (name === "middle" && ticket === "regular");
//   console.log("Please sit in any seat behind row 3 in middle section");
// } else if (name === "right" && ticket === "premium");
// console.log("Please sit in first 3 rows in right section");
// } else if (name === "right" && ticket === "regular");
// console.log("Please sit behind first 3 rows in right section");

// }


// var premiumStr = "You may sit in the first 3 rows";

// var nonPremiumStr= "You may sit behind row 3";

// var name = "Phil";

// var section = "middle"; // figure out a way to translate name to a section


// var ticketType= window.prompt("What type of ticket do you have?")

// var sectionStr= "You are in section" + section + "; ";

// if(ticketType === "premium"){
// var ticketStr= sectionStr + premiumStr
// } else {
// var ticketStr= sectionStr + nonPremiumStr
// }

// console.log(ticketStr);


There is an event with ticket prices that are `$50`, `$65`, `$85` for
standard, premier, and premier plus (for drinks) seating.
Seniors, veterans, and students receive a `$10` discount while standard patrons
  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`,
   print out a patrons `ticketPrice`.


var ticketType= window.prompt("What type of ticket would you like?")

var discountType= window.prompt ("Are you a student, senior, veteran, or none?")

var ticketPrice=

var standardStr= "Your ticket is 50 dollars";

var premierStr= "Your ticket is 60 dollars";

var premierPlusStr= "Your ticket is 85 dollars";

if(ticketType === "standard")







