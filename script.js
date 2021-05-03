const container = document.querySelector('.container');

let gridType = (16 * 16);

for (let i = 0; i < gridType; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.className = 'gridDiv';
    gridDiv.style.border = 'medium solid #000000'
    gridDiv.style.width = '0.5em';
    gridDiv.style.height = '0.5em';
    container.appendChild(gridDiv);
}