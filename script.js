// SELECTORS & VARIABLES
const container = document.getElementById("container");
let currentColor = "black"

// EVENTS

// document.getElementById("submit").addEventListener("click", () => {createGrid(); checkValidity();});
document.getElementById("submit").addEventListener("click", createGrid);
document.getElementById("clear").addEventListener("click", clearGrid);
document.getElementById("black").addEventListener("click", color);
document.getElementById("random").addEventListener("click", randomColor);

// FUNCTIONS

function createGrid() {
    if (document.getElementById('height').validity.valid == false ||
    document.getElementById('width').validity.valid == false) {
        alert('Please enter a number between 2 and 100');
        return false;
    };
    
    resetGrid()

    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value); 

    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    for (let i = 0; i < height*width; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.background = "#E6E6E6"
        container.appendChild(square);
    }
};

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "#E6E6E6");
    squares.forEach(square => square.style.border = "#E6E6E6");
    squares.forEach(square => square.onmouseover = function() {
        square.style.backgroundColor = "#E6E6E6"
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
