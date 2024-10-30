
function initListeners() {

    const squares = document.querySelectorAll(".square");

    squares.forEach((squareItem) => {
        squareItem.addEventListener("mouseenter",() => setSquareColor(squareItem));
    
    });

    const gridSizeButton = document.querySelector("#grid_size_button");
    gridSizeButton.addEventListener("click",getUserGridSize);
}

function setSquareColor(givenSquare) {

    const currentColor = givenSquare.style.backgroundColor || DEFAULT_COLOR;

    if (currentColor === DEFAULT_COLOR || currentColor === "") {
        
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        givenSquare.style.backgroundColor = `#${randomColor.padStart(6, '0')}`;
    } else {

        givenSquare.style.backgroundColor = darkenColor(currentColor, 0.1);
    }
}

function darkenColor(color, percent) {
    
    //Chatgpt helped
    const rgbValues = color.match(/\d+/g);
    if (!rgbValues) {
        console.error("Invalid color format");
        return color; 
    }

    let r = parseInt(rgbValues[0], 10);
    let g = parseInt(rgbValues[1], 10);
    let b = parseInt(rgbValues[2], 10);

    r = Math.max(0, Math.floor(r * (1 - percent)));
    g = Math.max(0, Math.floor(g * (1 - percent)));
    b = Math.max(0, Math.floor(b * (1 - percent)));

    return `rgb(${r}, ${g}, ${b})`;
}

function getUserGridSize() {
    
    let userGivenNumber = 0

    while(true) {
        let userGivenInput = window.prompt("Please enter whole number for desired grid size: ", "16");
        userGivenNumber = parseInt(userGivenInput);

        if(!isNaN(userGivenNumber) && userGivenNumber < 100) break;
        else alert("Please enter a number")
    }
    
    squareCount = userGivenNumber;
    updateElements();
}

function updateElements() {
    createGrid()
    infoBox.textContent = "Size: "+squareCount+"x"+squareCount;
    initListeners()
}

function createGrid() {
    
    const container = document.querySelector("#container");

    container.innerHTML = "";

    const containerSize = 960;
    const squareSize = containerSize / squareCount;

    for(var i=0; i<squareCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for(var j=0; j<squareCount; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = DEFAULT_COLOR;
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            row.appendChild(square);
        }
    }
}

let squareCount = 16; // Default size
const DEFAULT_COLOR = "bisque"; 
createGrid()
initListeners()

const header = document.querySelector(".header");
const infoBox = document.createElement("div");
infoBox.classList.add("infoBox");
infoBox.textContent = "Size: "+squareCount+"x"+squareCount;
header.appendChild(infoBox);