const grid = document.querySelector('.grid');
const n = 64;
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

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', () => box.classList.add('active')));