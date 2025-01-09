const reset_grid = document.getElementById("reset-grid");


const createNewGrid = (size) => {
    console.log(size)
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