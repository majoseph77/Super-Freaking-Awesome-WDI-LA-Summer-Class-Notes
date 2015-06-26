////////////////////////////////////////////////
// Part 1: Linking
////////////////////////////////////////////////

// Link this JavaScript file to an HTML document.
// You'll know the file is correctly linked if the console says "homework.js linked!"


<!DOCTYPE html>
<html>
<head>
  <script language="javascript" type="text/javascript"
   src="procedural_drills.js"></script>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <link rel="stylesheet" href="">
</head>
<body>

</body>
</html>







////////////////////////////////////////////////
// Part 2: Working With Data Structures
////////////////////////////////////////////////

var album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label: "Sire",
    formats: ["LP"]
  }
};

album.albumDetails.label
var label= album.albumDetails.label;



// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named variable.

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"

var album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: "July 14, 1978",
    label: "Sire",
    formats: ["LP", "8-track"]
  }
};

var album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: "August 3, 1979",
    label: "Sire",
    formats: ["Cassette"]
  }
};

album1.title= "Talking Heads: 77"
"Talking Heads: 77"
album1.title
"Talking Heads: 77"
//answer//
var album2Format0 = album2.albumDetails.formats[0];
 album3.albumDetails.formats.push(album2Format0);


var album3 = {
  title: "Fear of Music",
  albumDetails: {
  released: {
    releasedate:"August 3, 1979",
    label: "Sire",
    formats: ["Cassette"]
  }
};



// 3. Access album2's formats array and use an array method to add "LP" to album3's formats

// 4. Change the release date of album3 from a string into a Date object

//answer//

album3.albumDetails.released = new Date (album3.albumDetails.released);
Fri Aug 03 1979 00:00:00 GMT-0700 (PDT)


var album4 = {
  title: "Remain in Light",
  albumDetails: {
    label: "Sire",
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
};

// 5. Add the label "Sire" to album4's details

//answer//
album4.albumDetails.label = "Sire"


var album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label: "Sire"
    formats:["CD","Cassette", "LP"]
  }
};

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"


//answer://
album5.albumDetails.format = ["CD", "Cassette", "LP"];


var album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    label: ["Sire", "emi"],
    formats: ["CD", "cassette", "LP"]
  }
};




// 7. Make the label "emi" in album6 all uppercase
//answer://

var newLabelName =album6.albumDetails.label[1].toUpperCase()
album6.albumDetails.label[1] =newLabelName


var album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    label: ["Sire", "EMI"],
    formats: ["CD", "cassette", "LP"]
  }
};

// Convert album7's 'label' property from the string value "Sire, EMI" into the array: ["Sire", "EMI"]
//answer://


var album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    label: ["Sire", "EMI"],
    formats: ["CD", "cassette", "LP"]
  }
};

var talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
];

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////

// 1. print "Talking Heads were a prolific band" to the console
IF AND ONLY IF Talking Heads have 6 albums or more.
Otherwise, print "Talking heads didn't have much output."
Use the array of albums above.

if (talkingHeadsAlbum => [6]){
console.log("Talking heads didnt have much output.")
};



/////////////////////////////////////////////////////
// Part 4: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

// 1. Create an object literal called `band`.

// 2. Give it the property `name` and set it to "Talking Heads"

// 3. Give it the property `members` and set it to an array with a single string, "David Byrne", in it.

// 4. Give it the property `albums` and set it to the array stored in the variable talkingHeadsAlbums

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members array.

var band ={
  name: "Talking Heads",
  members: ["David Byrne"],
  albums: talkingHeadsAlbums[],

  band.members.push("Tiny Weymouth", "Chris Franz", "Jerry Harrison");

}



/////////////////////////////////////////////////////
// Part 5: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album

// 2. Create a variable called 'sireTally', and set it to the integer value 0.
Then use a for-loop to go through all the Talking Heads albums,
incrementing sireTally if the album was released under the "Sire" label


var sireTally = 0;


for (i=0; talkingHeadsAlbum < 10; sireTally++) {
  talkingHeadsAlbum.label = "Sire" ;
}
