// Create a square div

const container = document.querySelector(".container");

function getSquare() {

    let square = document.createElement("div");

    square.setAttribute("class", "square");

    return square;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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


    let squares = document.querySelectorAll(".square");

    squares.forEach(function(square) {

        square.addEventListener("mouseover", function() {

            square.style.backgroundColor = getRandomColor();

        });
    });
}




let size = 16;

addSquaresToContainer(size);


btn = document.querySelector(".grid-button");

btn.addEventListener("click", event => {

    size = prompt("Input the grid size:");
    
    while (size <= 0 || size > 100 || isNaN(size)) {

        size = prompt("Input the grid size between 1 and 100:");
    }

    // Reset the container first
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Add back the grid using the new size
    addSquaresToContainer(size);
    
})
