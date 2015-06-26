console.log("homework.js linked!");

////////////////////////////////////////////////
// Part 1: Linking
////////////////////////////////////////////////

// Link this JavaScript file to an HTML document.
// You'll know the file is correctly linked if the console says 
// "homework.js linked!"

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

// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named 
//    variable.
var labelOne = album1.albumDetails.label;
// or (really, any time, but only showing the alternate style in this one)
var labelOne = album1["albumDetails"]["label"];

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
album1["title"] = "Talking Heads: 77";

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

// 3. Access album2's formats array and use an array method to add "LP" to 
//    album3's formats
album3.albumDetails.formats.push("LP")
// or
var format = album2.albumDetails.formats[0];
album3.albumDetails.formats.push(format);

// 4. Change the release date of album3 from a string into a Date object
album3.released = new Date("August 3, 1979");
// or
album3.released = new Date(album3.released);

var album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
};

// 5. Add the label "Sire" to album4's details
album4.albumDetails.label = "Sire";

var album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label: "Sire"
  }
};

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"
album5.albumDetails.formats = ["CD", "Cassette", "LP"];
// or
album5.albumDetails.formats = ["CD", "Cassette", "LP"];

var album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    label: ["Sire", "emi"],
    formats: ["CD", "cassette", "LP"]
  }
};

// 7. Make the label "emi" in album6 all uppercase
album6.albumDetails.label[1] = album6.albumDetails.label[1].toUpperCase();

var album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    label: "Sire, EMI",
    formats: ["CD", "cassette", "LP"]
  }
};

// Convert album7's 'label' property from the string value "Sire, EMI" into the 
// array: ["Sire", "EMI"]
album7.albumDetails.label = album7.albumDetails.label.split(", ");
// or
album7.albumDetails.label = ["Sire", "EMI"];

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

// 1. print "Talking Heads were a prolific band" to the console IF AND ONLY IF 
//    Talking Heads have 6 albums or more. Otherwise, print "Talking heads 
//    didn't have much output." Use the array of albums above.
if (talkingHeadsAlbums.length >= 6){
  console.log("Talking Heads were a prolific band");
} else {
  console.log("Talking heads didn't have much output.");
}

/////////////////////////////////////////////////////
// Part 4: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

// 1. Create an object literal called `band`.
var band = {};

// 2. Give it the property `name` and set it to "Talking Heads"
band.name = "Talking Heads";

// 3. Give it the property `members` and set it to an array with a single 
//    string, "David Byrne", in it.
band.members = ["David Byrne"];

// 4. Give it the property `albums` and set it to the array stored in the 
//    variable talkingHeadsAlbums
band.albums = [talkingHeadsAlbums];

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members 
//    array.
band.members.push("Tiny Weymouth");
band.members.push("Chris Franz");
band.members.push("Jerry Harrison");

/////////////////////////////////////////////////////
// Part 5: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album
for (var i in talkingHeadsAlbums) {
  console.log(talkingHeadsAlbums[i]["title"]);
}

// 2. Create a variable called 'sireTally', and set it to the integer value 0. 
//    Then use a for-loop to go through all the Talking Heads albums, 
//    incrementing sireTally if the album was released under the "Sire" label.
var sireTall = 0;
for (var i in talkingHeadsAlbums) {
  if (talkingHeadsAlbums[i]["albumDetails"]["label"][0] === "Sire") {
    sireTall++;
  } else if (talkingHeadsAlbums[i]["albumDetails"]["label"] === "Sire") {
    sireTall++;
  }
}
