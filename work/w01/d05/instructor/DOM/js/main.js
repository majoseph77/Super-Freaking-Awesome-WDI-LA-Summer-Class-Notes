// First example

var container = document.getElementById("container");

var activateId = document.getElementById('activateId');


activateId.onclick = function(){
	
	// Change the text of the container
	container.innerHTML = "Hello Class!";

	// Change the background color of container
	container.style.backgroundColor = "blue";
}

//Second example

var activateClass = document.getElementById("activateClass");

// Target line class, returns an array
var lines = document.getElementsByClassName("line");

// When the button activateClass is clicked

activateClass.onclick = function(){
	
	// Change the text
	lines[0].innerHTML = "Class line words changed!";

	// 
	lines[1].style.fontWeight = "bold";

	// Change the color
	lines[2].style.color = "red";

	// Change the border
	lines[3].style.border = "1px dashed blue";
}

// Third example


// Create span tag

var spanTag = document.getElementsByTagName("span");

var result = document.getElementById("result");

var activateTagName = document.getElementById("activateTagName")

activateTagName.onclick = function(){
	result.innerHTML = spanTag.length + " paragraphs on the page";
}
