// SELECTORS

// const height = document.querySelector("#height");
// console.log(height)
    
// const width= document.querySelector("#width");
// console.log(width)

const container = document.getElementById("container")

// EVENTS
document.querySelector("#submit").addEventListener("click", createGrid(height.value, width.value));

document.querySelector("#delete").addEventListener("click", deleteGrid);

// FUNCTIONS

function createGrid(height, width) {
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    for (let i = 0; i < height*width; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.id = i + 1;
        square.innerText = "+";
        square.style.backgroundColor = "purple"
        // square.style.float = "left"
        square.style.border = "1px black solid";
        container.appendChild(square);
    }
};


function deleteGrid() {
}

