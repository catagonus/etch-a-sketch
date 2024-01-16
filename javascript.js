const grid = document.querySelector('#grid');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('span');
    row.style.display = 'flex';
    row.style.border = 'none';
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        row.appendChild(cell);
        
    }
    grid.appendChild(row);
    row.firstChild.style.borderLeft = '4px solid black';
    row.lastChild.style.borderRight = '4px solid black';
}

const drawDivs = document.querySelectorAll('#grid div');

function draw(e) {
    e.target.style.backgroundColor = 'chartreuse';
}

drawDivs.forEach(div => {
    div.addEventListener('mouseenter', draw);
    div.addEventListener('click', stopDraw);
})

function clear() {
    drawDivs.forEach(div => {
        div.addEventListener('mouseenter', draw);
    })
    drawDivs.forEach(div => {
        div.style.backgroundColor = '';
    })
}

function stopDraw() {
    drawDivs.forEach(div => {
        div.removeEventListener('mouseenter', draw);
    });
}

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', clear);

const userSizeButton = document.querySelector('#userSize');

userSize.addEventListener('click', drawGrid);

const testdiv = document.querySelector('#testdiv');

function drawGrid() {

    const size = prompt('Enter a grid size.');
    
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('span');
        row.style.display = 'flex';
        row.style.border = 'none';
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.style.border = '1px solid black';
            cell.style.height = 640 / size + 'px';
            cell.style.width = 640 / size + 'px';
            row.appendChild(cell);
        }
        testdiv.appendChild(row);
    }
}

