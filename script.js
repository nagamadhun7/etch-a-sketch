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
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)})`;
            sq.style.backgroundColor = randomColor;
        });
        container.appendChild(sq)
    }
}


createNewGrid(16)


reset_grid.addEventListener('click', () => {
    const newGrid = parseInt(prompt("Please enter grid size (1-100):"), 10);
    if (newGrid > 0 && newGrid <= 100){
        createNewGrid(newGrid)
    }
    else{
        alert("Please enter between 1 and 100 only")
    }
})



