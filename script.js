const gridContainer = document.querySelector(".container");
const divs = document.getElementsByClassName("cell");
const button = document.querySelector("#btn");

defaultGrid();


function defaultGrid(){
  createBoxes(16);
};

  //Function that create a grid of empty box's 
function createBoxes(boxsPerRow) {
  const total = (boxsPerRow * boxsPerRow) + boxsPerRow; //extra boxPerRow added to total to supplement lost divs needed to flex to new row in grid
  const newRowNum = boxsPerRow + 1;  
  let cellSize = 600/boxsPerRow + "px";


  for (let i = 1; i < total; i++) {
    const div = document.createElement('div');

    if (i % newRowNum === 0) { //if number exceeds the boxsPerRow number, than sets div to force a wrap to a new line.
      div.style.cssText = "flex-basis: 100%;";
    } else {
      div.classList.add("cell");
      div.style.width = cellSize;
      div.style.height = cellSize;

    }

    gridContainer.appendChild(div);
  }
};




let divsArray = Array.from(divs);

//Iterates through every div cell and changes background color to black as it enters it.
divsArray.forEach((el) => {
  // Do stuff here
  el.addEventListener("mouseenter", (event) => {
    el.style.backgroundColor = "black";

  })
});


button.addEventListener("click", (event) => {
  let sumOfCells;

  do {
    sumOfCells = prompt("Please select the amount of cells you wish to have in your grid. MIN 4, MAX 100");
    console.log(sumOfCells);
  } while ((sumOfCells < 4) || (sumOfCells > 100));
    
});


