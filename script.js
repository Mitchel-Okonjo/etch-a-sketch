const grid = document.querySelector('.grid');
const defaultGrid = document.querySelector('.grid-text');
const slider = document.querySelector('.slider');
const defaultGridValue = slider.getAttribute('value');
const apply = document.querySelector('.btn');
const reset = document.querySelector('.fa-power-off');

defaultGrid.textContent =  `${defaultGridValue}x${defaultGridValue}`;
setGrid(defaultGridValue);


grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('active');
    }
});

slider.addEventListener('input', function (e) {
    defaultGrid.textContent = `${e.target.value}x${e.target.value}`;
    
});

reset.addEventListener('click', () => resetGrid());

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
  setGrid(defaultGridValue);
}
