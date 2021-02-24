var containerEle = document.body.querySelector(".container");
var submitEle = document.querySelector(".submit");

var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

printingAnimals(animals);

// takes the list, and checks each element of list to see what to print out
function printingAnimals(list) {
  for(var i=0; i<list.length; i++){
    var ele = document.createElement("div");

    if(list[i] === "dog"){
      ele.innerHTML = "BoRf BoRf";

    } else if(list[i] === "cat"){
      ele.innerHTML = "I am a Cat";

    } else {
      ele.innerHTML = "I am an Animal";

    }
    containerEle.appendChild(ele);

  }
}

// takes the animal list, randomizes it, 
// clears the container div, 
// then reruns the printingAnimals() function
function randomize(list){
  list = list.sort(() => Math.random() - 0.5);
  containerEle.innerHTML = "";
  printingAnimals(list);
}

// waits for user to press the button, then runs randomize()
submitEle.addEventListener("click", function () {
  randomize(animals);
});