let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let decrementButtonElement = document.getElementById("decrementButton");
let incrementButtonElement = document.getElementById("incrementButton");

let imageMaxWidth = 300;
let defaultImageWidth = 200;
let imageMinWidth = 100;

let maxWidthWarningElement = "Too big. Decrease the size of the image";
let minWidthWarningElement = "Can't visible. Increase the size of the image";
imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function decreaseSize(){
    if(defaultImageWidth <= imageMinWidth){
        warningMessageElement.textContent = minWidthWarningElement;
    }else {
        warningMessageElement.textContent = "";
        defaultImageWidth = defaultImageWidth - 5;
        let updatedImageWidth = defaultImageWidth + "px";
        
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
        }
}

function increaseSize(){
    if(defaultImageWidth >= imageMaxWidth){
        warningMessageElement.textContent = maxWidthWarningElement;
    }else {
        warningMessageElement.textContent = "";
        defaultImageWidth = defaultImageWidth + 5 ;
        let updatedImageWidth = defaultImageWidth + "px";
        
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
        
    }
}