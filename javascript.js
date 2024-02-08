const grid = document.querySelector('#grid');

const GRIDSIZE = 640;

let drawMode = 'blackink';
let drawToggle = 'on';

drawGrid(16);

function drawGrid(size) {
    
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('span');
        row.style.display = 'flex';
        row.style.border = 'none';
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('drawdiv');
            cell.style.height = GRIDSIZE / size + 'px';
            cell.style.width = GRIDSIZE / size + 'px';
            cell.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.0})`;
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    
    const drawDivs = document.querySelectorAll('.drawdiv');
    drawDivs.forEach(div => {
        div.addEventListener('mouseover', draw);
        div.addEventListener('mousedown', toggleDraw);
        div.addEventListener('mouseup', draw);
    })
}

const userSizeButton = document.querySelector('#userSize');

function makeUserGrid() {
    let userInputSize = prompt('Enter a grid size 1-100.');
    if (userInputSize >=1 && userInputSize <=100) {
        drawGrid(userInputSize);
    } else {
        alert('Please only enter an integer between 1 and 100.');
        makeUserGrid();
    }
}

userSizeButton.addEventListener('click', makeUserGrid);


function draw(e) {
    if (drawToggle === 'on') {
        switch(drawMode) {
            case 'blackink':
                e.target.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${1.0})`;
                break;
            case 'redink':
                e.target.style.backgroundColor = `rgba(${255}, ${0}, ${0}, ${1.0})`;
                break;
            case 'greenink':                
                e.target.style.backgroundColor = `rgba(${0}, ${255}, ${0}, ${1.0})`;
                break;
            case 'blueink':                
                e.target.style.backgroundColor = `rgba(${0}, ${0}, ${255}, ${1.0})`;
                break;
            case 'randomink':
                randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`;
                e.target.style.backgroundColor = randomColor;
                break;
            case 'darkening':
                let currentColor = e.target.style.backgroundColor;
                let regex = /, \d\.?\d*\)/gm;
                let currentDarkness = String(currentColor.match(regex));
                console.log(currentDarkness);
                let newDarkness = +currentDarkness.slice(2, -1);
                if (newDarkness <= .9) newDarkness += .1;
                console.log(currentDarkness);
                console.log(newDarkness);
                e.target.style.backgroundColor = currentColor.slice(0, -currentDarkness.length) + ', ' + newDarkness + ')';
                console.log(e.target.style.backgroundColor);
                break;
            case 'eraser':                
                e.target.style.backgroundColor = '';
                break;
        }
    }
}

const blackColor = document.querySelector('#black');

blackColor.addEventListener('click', () => {
    currentColor = 'black';  
    drawMode = 'blackink';
});

const redColor = document.querySelector('#red');

redColor.addEventListener('click', () => {
    drawMode = 'redink';
});

const greenColor = document.querySelector('#green');

greenColor.addEventListener('click', () => {
    drawMode = 'greenink';
});

const blueColor = document.querySelector('#blue');

blueColor.addEventListener('click', () => {
    drawMode = 'blueink';
});

const randomizer = document.querySelector('#random');

randomizer.addEventListener('click', () => {
    drawMode = 'randomink';
});

const darkening = document.querySelector('#darkening');

darkening.addEventListener('click', () => {
    drawMode = 'darkening';
});

const eraseButton = document.querySelector('#eraser');

eraseButton.addEventListener('click', () => {
    drawMode = 'eraser';
});

const clearButton = document.querySelector('#clear');
    
clearButton.addEventListener('click', clear);

function clear() {
    const drawDivs = document.querySelectorAll('.drawdiv');
    drawDivs.forEach(div => {
        div.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.0})`;
    })
}

function toggleDraw(e) {
    if (drawToggle === 'on') {
        drawToggle = 'off';
    } else if (drawToggle === 'off') {
        drawToggle = 'on';
    };
}