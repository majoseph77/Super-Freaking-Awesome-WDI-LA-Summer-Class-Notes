// var container = document.getElementById('container');

// var activateId = document.getElementById('activateId');

// activateId.onclick = function(){
// //Change the text of the container once button has been clicked
// container.innerHTML = "Hello Class!";
// //Change the background color of container to blue//
// container.style.backgroundColor = 'blue';

// }

var acitvateClass = document.getElementById('acitvateClass');

var lines = document.getElementsByClassName('line');

activateClass.onclick = function(){

  //This one wol change the text of the first element//

  lines[0].innerHTML = "Class line words changed";


// the text of the first element//

  lines[1].style.fontWeight ='bold';

  lines[2].style.color ='red';

  lines[3].style.border = '1px dashed blue';

}

// document.querySelector('.activate').onclick = function(){
//   alert("hi");
// }

// document.querySelectorAll(".activate")
