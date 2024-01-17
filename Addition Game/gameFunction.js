let checkButtonElement = document.getElementById("checkButton");
let restartButtonElement = document.getElementById("restartButton");
let gameResultElement = document.getElementById("gameResult");
let userInputElement = document.getElementById("userInput");
let firstElement = document.getElementById("firstNumber");
let secondElement = document.getElementById("secondNumber");

let incorrectAnswer = "Please Try again!";
let correctAnswer = "Congratulations! you got it right";

function restartGame() {
    let firstNum = Math.random() * 100;
    let secondNum = Math.random() * 100;
    
    firstElement.textContent = Math.ceil(firstNum);
    secondElement.textContent = Math.ceil(secondNum);
    gameResultElement.textContent = "";
    userInputElement.value = "";
}

restartGame();

function checkResult(){
    let userInputValue = parseInt(userInputElement.value);
    let firstValue = parseInt(firstElement.textContent);
    let secondValue = parseInt(secondElement.textContent);
    let result = firstValue + secondValue;
    if (result === userInputValue){
        gameResultElement.textContent = correctAnswer;
        gameResultElement.style.backgroundColor = "#028a0f";
    }else {
        gameResultElement.textContent = incorrectAnswer;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}

