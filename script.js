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
const gridDivs = document.querySelectorAll('.gridDiv');

gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener('mouseenter', bgColor);
})
 
function bgColor() {
    this.style.backgroundColor = 'black';
}

//button to clear grid
const clearGrid = document.querySelector('.btnClear');


clearGrid.addEventListener('click', () => {
    bgColorReset()
    promptGrid()
});


function bgColorReset() {
    gridDivs.forEach((gridDiv) => {
        gridDiv.style.backgroundColor = 'white';
    })
}

function promptGrid() {
   let chooseGrid = prompt('Choose Grid Size (max: 100)','');
   if (chooseGrid <= 100) {
       return chooseGrid;
   } else {
       alert('Choose a number between 1 - 100')
       promptGrid()
   }
}
