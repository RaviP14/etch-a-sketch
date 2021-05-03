const container = document.querySelector('.container');

function makeGrid(rows, columns) {

    for (let i = 0; i < (rows * columns); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'gridDiv';
        gridDiv.style.border = 'thin solid #000000'
        gridDiv.style.width = '2em';
        gridDiv.style.height = '2em';
        container.appendChild(gridDiv);
    }
}

makeGrid(16,16)
//doesn't work correctly
const hover = document.querySelector('.gridDiv');
hover.addEventListener('hover', () => {
    gridDiv.backgroundColor = 'black';
});