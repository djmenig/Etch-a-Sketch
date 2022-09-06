//creates the grid which listens for the mouse cursor to paint the grid on mouseover
function createGrid(size) {
    let grid = document.querySelector('#grid');
    let gridSizeSquared = size * size;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //stylizes #grid columns according to the size variable
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; //stylizes #grid rows according to the size variable

    //creates the drawing effect with the mouse pointer by "filling" the grid with squares of the background color
    for(i = 0; i < gridSizeSquared; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseover', (event) => {
            //square.style.backgroundColor = 'black'; //draws each square black
            square.style.backgroundColor = randomColor(); //draws each square a random color
        })
    }
}

createGrid(16);

function clearGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.removeAttribute('style');
    })
}

function changeGridSize() {
    userInput = prompt("How many squares per side for the new grid? (2-100)");
    if(userInput >=2 && userInput <=100) {
        clearGrid();
        createGrid(userInput);
    } else {
        alert("Please enter a value between 2-100.");
    }
    return userInput;
}

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})` 
}