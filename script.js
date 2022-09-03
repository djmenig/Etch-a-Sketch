function createGrid(size) {
    let grid = document.querySelector('#grid');
    let gridSizeSquared = size * size;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //stylizes #grid columns according to the size variable
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; //stylizes #grid rows according to the size variable

    for(i = 0; i < gridSizeSquared; i++) { //creates the drawing effect with the mouse pointer by "filling" the grid with squares of the background color
        let square = document.createElement('div');
        grid.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseover', (event) => {
            square.style.backgroundColor = 'black';
        })
    }
}

createGrid(16);

let userInput
function clearGrid() {
    let squares = document.querySelector('#grid').children;
    for(i = 0; i < userInput*userInput; i++) {
    squares.style.backgroundColor = 'white';
    }
    console.log(userInput);
}

function changeGridSize() {
    userInput = prompt("How many squares per side for the new grid? (2-100)");
    if(userInput >=2 && userInput <=100) {
        createGrid(userInput);
        clearGrid();
    } else {
        alert("Please enter a value between 2-100.");
    }
    return userInput;
}