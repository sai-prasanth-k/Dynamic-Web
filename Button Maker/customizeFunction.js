let bgcolorElement = document.getElementById("bgColorInput");
let fontColorElement = document.getElementById("fontColorInput");
let fontSizeElement = document.getElementById("fontSizeInput");
let fontWeightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let bdRadiusElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function customizeButton(){
    let bgColorValue = bgcolorElement.value;
    let fontColorValue = fontColorElement.value;
    let fontSizeValue = fontSizeElement.value;
    let fontWeightValue = fontWeightElement.value;
    let paddingValue = paddingElement.value;
    let bdRadiusValue = bdRadiusElement.value;
    
    customButtonElement.style.backgroundColor = bgColorValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue;
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = bdRadiusValue;
}