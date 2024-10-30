
function initListeners() {

    const squares = document.querySelectorAll(".square");

    squares.forEach((squareItem) => {
        squareItem.addEventListener("mouseenter", ()=> {
            squareItem.style.backgroundColor = "lightblue";
            console.log("what");
        });
    
    });

    const gridSizeButton = document.querySelector("#grid_size_button");
    gridSizeButton.addEventListener("click",getUserGridSize);
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
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            row.appendChild(square);
        }
    }
}





let squareCount = 16;

createGrid()
initListeners()

const header = document.querySelector(".header");
const infoBox = document.createElement("div");
infoBox.classList.add("infoBox");
infoBox.textContent = "Size: "+squareCount+"x"+squareCount;


header.appendChild(infoBox);