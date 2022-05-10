const gridContainer = document.querySelector(".container");
const divs = document.getElementsByClassName("cell");
const button = document.querySelector("#btn");


defaultGrid();//Creates initial 16x16 grid.



//Takes the array like object and make it into an array.
let divsArray = Array.from(divs);

//Iterates through every div cell and changes background color to black as it enters it.
divsArray.forEach((el) => {
  // Do stuff here
  el.addEventListener("mouseenter", (event) => {
    el.style.backgroundColor = "black";

  })
});









//Click listener that when clicked prompts user for new grid size. Creates new grid and adds listener to new grid to track mouse.
button.addEventListener("click", (event) => {
  let sumOfCells;

  do {
    sumOfCells = Number(prompt("Please select the amount of cells you wish to have horizontally across your grid. MIN 2, MAX 100"));
  } while ((sumOfCells < 2) || (sumOfCells > 100));

  deleteGrid();
  createBoxes(sumOfCells);

  divsArray = Array.from(divs);

  divsArray.forEach((el) => {
    el.addEventListener("mouseenter", (event) => {
      el.style.backgroundColor = "black";
  
    })
  });
});





//Creates a default grid of 16 x 16.
function defaultGrid(){
  createBoxes(16);
};


//Function that create a grid of empty box's 
function createBoxes(boxsPerRow) {
  const total = (boxsPerRow * boxsPerRow) + boxsPerRow; //extra boxPerRow added to total to supplement divs needed to flex to new row in grid
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


function deleteGrid(){
  divsArray.forEach(element => {
    element.remove();
  });
};




