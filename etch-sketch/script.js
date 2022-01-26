
let grid = document.getElementById("grid");
let clear = document.getElementById("clear-button");
let sizeSlider = document.getElementById("rangeNum");
let inputSize = document.getElementById("sizeRange");
let range = document.getElementById("rangeNum");
let gridColor = document.getElementById("gridColor")
//create the 16x16 grid of div elements

function makeGrid(size, color) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let block = document.createElement('div');
            block.className = "grid-block";
            grid.appendChild(block);
        }
    }
    const block = document.querySelectorAll(".grid-block");

    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", function (event) {
            event.currentTarget.style.backgroundColor = color;
        });
    }
}
//removes the pre-exisiting grid and creates a new one 
sizeRange.oninput = function(){ 
    document.querySelectorAll(".grid-block").forEach(function(a){
        a.remove()})
    makeGrid(inputSize.value, gridColor.value);
    range.innerHTML = inputSize.value;
};
//Clear screen 
clear.addEventListener("click", function () {
    console.log("click");
    const block = document.querySelectorAll(".grid-block");
    for (let i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = "rgb(225, 224, 224)";
    }
});
gridColor.oninput = function(){
    
    const block = document.querySelectorAll(".grid-block");
    for (let i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = "rgb(225, 224, 224)";
    }

    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", function (event) {
            event.currentTarget.style.backgroundColor = gridColor.value;
        });
    }
}

//default grid: 16, black 
makeGrid(16, "black");






