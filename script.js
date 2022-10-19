const grid = document.querySelector('.grid');
const defaultGrid = document.querySelector('.grid-text');
const slider = document.querySelector('.slider');
const defaultGridSize = slider.getAttribute('value');
const apply = document.querySelector('.btn');
const reset = document.querySelector('.fa-power-off');
let gridSize = 16;

defaultGrid.textContent =  `${defaultGridSize}x${defaultGridSize}`;
setGrid(defaultGridSize);


grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('active');
    }
});

slider.addEventListener('input', function (e) {
    gridSize = e.target.value;
    defaultGrid.textContent = `${gridSize}x${gridSize}`;
    
});

reset.addEventListener('click', () => resetGrid());

apply.addEventListener('click', () => applyGrid());

function setGrid(n) {
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add('row');
        for (let j = 0; j < n; j++) {
            const childDiv = document.createElement('div');
            childDiv.classList.add('box');
            div.appendChild(childDiv);
        }
        grid.appendChild(div);
    }
}

function resetGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  slider.value = defaultGridSize;
  defaultGrid.textContent = `${defaultGridSize}x${defaultGridSize}`;
  setGrid(defaultGridSize);
}

function applyGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
      setGrid(gridSize);
}
