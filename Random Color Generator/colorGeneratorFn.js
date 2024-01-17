let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];

let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");

function changeBg() {
    let sizeOfArray = bgColorsArray.length;
    let randomBgNumber = Math.ceil(Math.random() * sizeOfArray)-1;
    if (randomBgNumber === sizeOfArray){
        randomBgNumber = sizeOfArray - 1;
    }
    let randomBgColor = bgColorsArray[randomBgNumber];
    bgContainerElement.style.backgroundColor = randomBgColor;
    
}