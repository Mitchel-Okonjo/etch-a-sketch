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

const grid = document.querySelector('.grid');
const defaultGrid = document.querySelector('.grid-text');
const slider = document.querySelector('.slider');
const gridValue = slider.getAttribute('value');

defaultGrid.textContent =  `${gridValue}x${gridValue}`;
setGrid(gridValue);

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('mouseover', () => box.classList.add('active')));