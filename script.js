// Create a square div

const container = document.querySelector(".container");

function getSquare() {

    let square = document.createElement("div");

    square.setAttribute("class", "square");

    return square;
}

function addSquaresToContainer(count) {


    for (let i = 0; i < count; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        while(row.firstChild){
            row.removeChild(row.firstChild);
        }

        for (let j = 0; j < count; j++) {

            row.append(getSquare());
        }

        container.append(row);
    }
    
}

const GRID_SIZE = 16;

addSquaresToContainer(GRID_SIZE);

let squares = document.querySelectorAll(".square");

squares.forEach(function(square) {

    square.addEventListener("mouseover", function() {

        square.classList.add("coloured");

    });
});