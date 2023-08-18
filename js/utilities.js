function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    inputField.value = '';
    return inputFieldAmount;
}

function getTextFieldById(inputId){
    const textField = document.getElementById(inputId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

function setTextValueById(elementId, newValue){
    const textField = document.getElementById(elementId);
    textField.innerText = newValue;

}