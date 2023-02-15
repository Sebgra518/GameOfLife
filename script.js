/** @type {HTMLCanvasElement} */ // <-- help vs code with IntelliSense for Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var running = false;
var controlButton = document.getElementById("controlButton");
var time = 250;

let table = Array.from({length: 25}, e => Array(25).fill(0));

for (var i = 0; i < 25; i++){
    for (var j = 0; j < 25; j++){
        drawWhitePixel(i * 25,j * 25);
    }
}


canvas.onclick = function(event) {
    // e = Mouse click event.
    var rect = event.target.getBoundingClientRect();
    //Note: -4 for the border          V
    var x = event.clientX - rect.left - 4; //x position within the element.
    var y = event.clientY - rect.top - 4;  //y position within the element.
    drawBlackPixel(x,y);
}

function runControl(){
    if (running){
        controlButton.innerHTML = "Run";
        controlButton.style.backgroundColor = "lime";
        running = false;
    } else {
        controlButton.innerHTML = "Stop";
        controlButton.style.backgroundColor = "red";
        running = true;
    }
}

//Draw pixels on the grid along with filling 2d array
function drawWhitePixel(x,y){
    ctx.fillStyle = "White";
    ctx.fillRect(x,y,20,20);
    table[screenPosToTablePos(x)][screenPosToTablePos(y)] = 0;
}

function drawBlackPixel(x,y){
    ctx.fillStyle = "Black";
    ctx.fillRect(tablePosToScreenPos(screenPosToTablePos(x)),tablePosToScreenPos(screenPosToTablePos(y)),20,20);
    table[screenPosToTablePos(x)][screenPosToTablePos(y)] = 1;

}


//Convert from mousePos on screen to pixel location in 2d array
function screenPosToTablePos(x){
    return Math.floor(x/25);
}
//Opposite of above
function tablePosToScreenPos(x){
    return Math.floor(x * 25);
}



//Logic
/*
Dead Cell - > Alive Cell (3live neighbors)
Alive Cell -> Dead Cell (less than 2 or more than 3 neighbors)
Alive Cell -> Alive Cell (2 or more neighbors)
*/

setInterval(function(){
    //Check if cell is black
    
},time);