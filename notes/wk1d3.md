#**Schedule**
*Morning
  *HTML review & yoga
  *CSS Box model & positioning
  *HTML/ CSS Lab
*Lunch(Wellness Walk)
*Intro to JS
  *1. Datatypes/Variables/Arrays
  *2. Objects

#**Stanleys Class Objectives**
*_CSS Box Model_
  *SWBAT:
    -Understand CSS Box Model
    -Id boxes on public websites
    -Inline vs block
    -static, relative,fixed, or float

#**Notes**
##Understanding CSS Box Model
*All websites are basically boxes. Basic components are
  -width
  -height

*A border goes around the box

*The distance in between the box and border is padding
  -padding: the space from the box to the border

*If you want to push distance outside of the border use margin
  -margin: any distance outside of the border

      *CSS Box Model understood*

##Identifying boxes on public websites
  *To calculate the width or height of your box model
    -width + borderwith+padding
    -height+ borderheight +padding

  *If you dont specify width, padding or border it will
  take on default values of browsers or default to 0

  *If you dont declare width but declare the border & padding
  the box will push in.

  *Sometimes the browser will already have default settings, if you want to
  reset go into your css and set with body tag

##Inline vs Block
*Inline
  *Inline literally means what it says. Inline elements wont break the line
  they will keep going
  *EX: Meg was here <i> here</i>
  *Inline elements are not effected by margins
  -<span>

  *To center inline
    use text-align: center;

*Block
  *Blocks can be defined as any element that will break a line and be viewed
  as sections.
  *Block Elements
  -section
  -articles
  -div
  -p
  -li
  -h1

*Margin Shorthands
  *Margin:0 will apply to all sides
  *When you specify all 4 it will go in a clockwise motion
  *top, right, bottom, left "TRBL"
  *When u only specify 2 #'s in the margin the format is "TB"; "LR"
    *Ex: margin: 10 20 ; 10 will apply to TB 20 will apply to 'LR'
  (same rules apply to padding)

  *To center a block
    -margin: 0 auto;


*For block elements if you dont set the width it will take the size of the
parent content

*When centering block elements use margin: 0 auto

*You can always see the box model in your chrome browser

#Static, relative, fixed, absolute, float
  *Since html reads from top 2 bottom all elements are static.
    *static elements: will go from top to bottom
    *the position of static elements can only be modified with margin command

  *Float
    -will position sections to desired direction
    -acts as responsive text
    -Ex: use float: left;

  *Absolute
  -Takes it out of the normal flow of the page, you can dictate where
  you want it to be on the page.
  -If u state that an element is absolute it starts at top left corner
  -If absolute is in a relative block

  *commands top, left, right, bottom only work with relative,
  absolute or fixed but never for static.

#Intro to JS

##Datatypes, Variables, and Arrays

*Objects
*Object literal syntax
var o={
  name:"jim"
  age: "?"
}

*Dont use ; inside of an object
if you want more than one prop. seperate with,
*Objects are made of properties
*Properties are made up by pairing key values. Sometimes
keys and names are synonymous. The value can be any data type.
*Each property must have a key and a value
*When a propertys value is a function it is called a method
Ex: Key--> name: "tiff" <----Value

*If your going to use your function as a constructor function ur
first letter should be capital
*Ex: function "H"ouse(numBaths, numBedrooms, color) {
    this.baths = numBaths;
    this.bedrooms = numBedrooms;
    this.color = color;
}

var house = new House(3, 4, 'purple');


honk=function(){console.log "beep beep"}


var car = {
  make: benz
  model: sedan
  year: 2015
  color: black
  mileage: 0
};

function Car(make, model, year, color, mileage) {
  this.make= make;
  this.model = model;
  this.year= year;
  this.color= color;
  this.mileage= mileage;
}

var honda = new Car("BMW", "7series", 2016, "black", 23);
}

}


Vocab
*Object
*Attribute
*Method
*Properties
*Pr





