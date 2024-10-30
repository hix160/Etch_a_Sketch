




const container = document.querySelector("#container");

for(var i=0; i<16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(var j=0; j<16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach((squareItem) => {
    squareItem.addEventListener("mouseenter", ()=> {
        squareItem.style.backgroundColor = "lightblue";
        console.log("what");
    });

});