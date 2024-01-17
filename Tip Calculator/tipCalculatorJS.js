let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let calculateButtonElement = document.getElementById("caclulateButton");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input";

function calculateValue(){
    let billAmountInputValue = billAmountElement.value;
    let percentageTipInputValue = percentageTipElement.value;
    
    if (billAmountInputValue === ""){
        errorMessageElement.textContent = errorMessage;
    }else if(percentageTipInputValue === ""){
        errorMessageElement.textContent = errorMessage;
    }else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);
        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;
        
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;
        
    }
}