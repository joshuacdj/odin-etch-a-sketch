// Create a square div

const container = document.querySelector(".container");

function getSquare() {

    let square = document.createElement("div");

    square.setAttribute("class", "square");

    return square;
}

function addSquaresToContainer(count) {

    for (let i = 0; i < count; i++) {

        container.append(getSquare());
    }
}

const GRID_SIZE = 16;

addSquaresToContainer(GRID_SIZE * GRID_SIZE);