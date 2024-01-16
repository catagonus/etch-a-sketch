const grid = document.querySelector('#grid');

const GRIDSIZE = 640;

for (let i = 0; i < 16; i++) {
    const row = document.createElement('span');
    row.style.display = 'flex';
    row.style.border = 'none';
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        row.appendChild(cell);
        
    }
    grid.appendChild(row);
}

makeDraw();

function drawGrid() {

    const size = prompt('Enter a grid size 1-100.');
    
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('span');
        row.style.display = 'flex';
        row.style.border = 'none';
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.style.border = '1px solid black';
            cell.style.height = GRIDSIZE / size + 'px';
            cell.style.width = GRIDSIZE / size + 'px';
            row.appendChild(cell);
        }
        
        grid.appendChild(row);
    }

    makeDraw();
}

function makeDraw() {

    const drawDivs = document.querySelectorAll('#grid div');

    drawDivs.forEach(div => {
        div.setAttribute('class', 'drawOn');
        div.addEventListener('mouseenter', draw);
        div.addEventListener('click', toggleDraw);
    });

    function draw(e) {
        if (e.target.classList.contains('drawOn')) {
            e.target.style.backgroundColor = 'chartreuse';
        }
    }
    
    function clear() {
        drawDivs.forEach(div => {
            div.addEventListener('mouseenter', draw);
            div.setAttribute('class', 'drawOn');
            div.style.backgroundColor = '';
        })
    }
    
    function toggleDraw(e) {
        if (e.target.classList.contains('drawOn')) {
            drawDivs.forEach(div => {
                div.classList.remove('drawOn');
                div.setAttribute('class', 'drawOff');
            });
        } else {
            drawDivs.forEach(div => {
                div.classList.remove('drawOff');
                div.setAttribute('class', 'drawOn');
            });
        }
        draw(e);
    }
    
    const clearButton = document.querySelector('#clear');
    
    clearButton.addEventListener('click', clear);
    
    const userSizeButton = document.querySelector('#userSize');
    
    userSize.addEventListener('click', drawGrid);
}

