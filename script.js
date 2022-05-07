const gridContainer = document.querySelector(".container");



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

createBoxes(16);