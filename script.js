const container = document.querySelector('.container');

//creates a grid of divs
function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.style.height = `${(660) / rows}px`;
        gridDiv.style.width = `${(660) / columns}px`;
        gridDiv.className = 'gridDiv';
        container.appendChild(gridDiv);
    }
    //add hover to divs
    const gridDivs = document.querySelectorAll('.gridDiv');

    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseenter', bgColor);
    })
    let colors = ['#d8f3dc', '#b7e4c7', '#95d5b2', '#74c69d', '#52b788', '#40916c', '#2d6a4f', '#1b4332', '#081c15']
    function bgColor() {
        this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
    //button to clear grid
    const clearGrid = document.querySelector('.btnClear');

    clearGrid.addEventListener('click', () => {
        bgColorReset()
    })
    function bgColorReset() {
        gridDivs.forEach((gridDiv) => {
            gridDiv.style.backgroundColor = 'white';
        })
    }

}

makeGrid(16,16)

//button to choose grid size
const chooseGrid = document.querySelector('.btnChoose');

chooseGrid.addEventListener('click', () => {
    gridReset()
    promptGrid()
});

function gridReset() {
    const remDiv = document.querySelectorAll('.gridDiv');

    remDiv.forEach((gridDiv) => {
        container.removeChild(gridDiv)
    })
}

function promptGrid() {
   let chooseGrid = prompt('Choose Grid Size (max: 100)','');
   if (chooseGrid <= 100) {
       return makeGrid(chooseGrid,chooseGrid);
   } else {
       alert('Choose a number between 1 - 100')
       promptGrid()
   }
}
