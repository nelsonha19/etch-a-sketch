const container = document.querySelector('.container');


/* DRAW DEFAULT GRID AT START*/
let drawDefaultGrid = function() { 
    const DEFAULT_NO_GRID = 8;
    let totalNumberOfGrids = numberOfGrids(DEFAULT_NO_GRID);
    container.innerHTML = "";

    // DEFAULT GRID
    for(let i = 0; i < totalNumberOfGrids; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');


        let gridSide = ( 608 / DEFAULT_NO_GRID) ;
        grid.style.width = gridSide + 'px';
        grid.style.height = gridSide + 'px';

        container.appendChild(grid);

        defaultHover(grid);


    }
}

let createGrid = function(number) {

    // DELETE ALL CONTAINER CHILD NODES
    const container = document.querySelector('.container');
    container.innerHTML = "";

    for(let i = 0; i < number*number; i++) {
        let totalNumberOfGrids = numberOfGrids(number);
        let grid = document.createElement('div');
        grid.classList.add('grid');


        let gridSide = ( 608 / number) ;
        grid.style.width = gridSide + 'px';
        grid.style.height = gridSide + 'px';

        container.appendChild(grid);
        

        defaultHover(grid);


    }
}

let defaultHover = function (grid) {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'red';

    });

};

const button = document.querySelector('.submit');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
    let number = text.value;
    if(number>0 && number <=32) {
        createGrid(number);
    } else {
        alert("Please enter a number between 0 and 32");

    }

});


// Total number of grids depending on n
numberOfGrids = (n) => n * n;

drawDefaultGrid();