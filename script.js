const reset_grid = document.getElementById("reset-grid");
const container = document.getElementById('container');

const createNewGrid = (size) => {
    container.innerHTML = '';
    const sqSize = 960/size;
    for(let i = 0; i < size * size; i++){
        const sq = document.createElement('div');
        sq.classList.add('sq');
        sq.style.width = `${sqSize}px`;
        sq.style.height = `${sqSize}px`;
        sq.addEventListener('mouseover', () => {
            sq.style.backgroundColor = 'black';
        })
        container.appendChild(sq)
    }
}

reset_grid.addEventListener('click', () => {
    const newGrid = prompt("Pleasse enter grid size till 100 only");
    if (newGrid > 0 && newGrid <= 100){
        createNewGrid(newGrid)
    }
    else{
        alert("Please enter between 1 and 100 only")
    }
})