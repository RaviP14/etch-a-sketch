const container = document.querySelector('.container');
//creates a grid of divs
function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'gridDiv';
        gridDiv.style.width = '2em';
        gridDiv.style.height = '2em';
        container.appendChild(gridDiv);
    }
}

makeGrid(16,16)

//add hover to divs
const hovers = document.querySelectorAll('.gridDiv');

hovers.forEach((gridDiv) => {
    gridDiv.addEventListener('mouseenter', bgColor);
})

//button to clear grid 
function bgColor() {
    this.style.backgroundColor = 'black';
}

const clearGrid = document.querySelector('.bClear');

clearGrid.addEventListener('click', )