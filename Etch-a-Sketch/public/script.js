const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {

    let gridSize = prompt('Type in the size of the grid. The max is 100 squares per side.', '16');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };

    generateGrid(gridSize);
});

function generateGrid(sizeOfGrid) {

    let boxSize = 800 / sizeOfGrid;

    let darkness = 255;

    for (i = 0; i < sizeOfGrid*sizeOfGrid; i++) {
        let box = document.createElement('div');
        box.setAttribute(`style`, `background-color:white; border-width: 2px; border-color: black; width: ${boxSize}px; height: ${boxSize}px;`)

        box.addEventListener('mouseover', () => {
            let firstRndmRGB = Math.floor(Math.random() * darkness);
            let secondRndmRGB = Math.floor(Math.random() * darkness);
            let thirdRndmRGB = Math.floor(Math.random() * darkness);

            box.style.backgroundColor = `rgb(${firstRndmRGB}, ${secondRndmRGB}, ${thirdRndmRGB})`;
            
            if (darkness) {
                darkness -= 25.5;
            }
        });

        container.appendChild(box);
    }
}