// SELECTORS

const height = parseInt(document.getElementById("height").value);
console.log(height)
console.log(typeof height)
    
const width = parseInt(document.getElementById("width").value);
console.log(width)

const container = document.getElementById("container");

let currentColor = "black"
// EVENTS
document.getElementById("submit").addEventListener("click", createGrid(height, width));

document.getElementById("delete").addEventListener("click", deleteGrid);
document.getElementById("random").addEventListener("click", randomColor);
// FUNCTIONS

function createGrid(height, width) {
    //Removes old grid elements when a new grid is created
    resetGrid()

    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    for (let i = 0; i < height*width; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.id = i + 1;
        square.style.backgroundColor = "#FDFEF1"
        square.style.borderColor = "#F9FDF2";
        container.appendChild(square);
    }
    color();
};

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

function deleteGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "transparent");
    squares.forEach(square => square.style.border = "transparent");
};

function color() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.onmouseover = function() {
        square.style.backgroundColor = currentColor
    });
}

function randomColor() {
    currentColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

}

function rainbowColor() {

}

