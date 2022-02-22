//fetching that mp3 audio file with id="myAudio" and storing fetched audio in variable x
var x = document.getElementById("myAudio");

function playAudio() {
  x.play(); // using the variable x to play the fetched audio
}

function pauseAudio() {
  x.pause(); // using the variable x to pause the fetched audio
}

// wanted to give arrow key functionality to person
document.onkeydown = function(e){
  console.log("key code is:", e.which); // which key pressed determined and consoled
  person = document.querySelector('.person'); // person is taped using class
  personX = parseInt(window.getComputedStyle(person, null).getPropertyValue('top')); // person location
                                                                // from top is tapped which is 503

if(e.which==38 && personX> 110){ // if pressed key is 38 and personX > 218 as 503>300
  // person = document.querySelector('.person');
  // personX = parseInt(window.getComputedStyle(person, null).getPropertyValue('top'));

  person.style.top = personX - 5 + "px"; // Decreasing the px from top, person moving upwards
    let width = person.clientWidth;
    let height = person.clientHeight;
    person.style.width= width -1 + "px";
    person.style.height= height -1 + "px";
     console.log("width is " +width);
}
}
