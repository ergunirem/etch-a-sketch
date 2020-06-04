// SELECTORS
const container = document.getElementById("container");

let currentColor = "black"

// EVENTS

document.getElementById("submit").addEventListener("click", createGrid);
document.getElementById("clear").addEventListener("click", clearGrid);
document.getElementById("black").addEventListener("click", color);
document.getElementById("random").addEventListener("click", randomColor);

// FUNCTIONS

function createGrid() {
    //Removes old grid elements when a new grid is created
    resetGrid()

    //Get input values for sketch book size
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);   

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
};

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "#FDFEF1");
    squares.forEach(square => square.style.border = "#FDFEF1");
    squares.forEach(square => square.onmouseover = function() {
        square.style.backgroundColor = "#FDFEF1"
    });
};

function color() {
    currentColor = "black"
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.onmouseover = function() {
        square.style.backgroundColor = currentColor
    });
}

function randomColor() {
    currentColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.onmouseover = function() {
        square.style.backgroundColor = currentColor
    });
}
