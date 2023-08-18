// function getInputFieldById(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputFieldAmountString = inputField.value;
//     const inputFieldAmount = parseFloat(inputFieldAmountString);
//     inputField.value = '';
//     return inputFieldAmount;
// }

document.getElementById('btn-deposit').addEventListener('click', function () {
    // this is for deposit amount
    const depositAmount = getInputFieldById('deposit-amount');
    const previousDepositAmount = getTextFieldById('deposit');
    const newTotalDepositAmount = previousDepositAmount + depositAmount;
    const totalDepositAmount = setTextValueById('deposit', newTotalDepositAmount);

    // this is for balance
    const previousBalance = getTextFieldById('balance');
    const newBalanceTotal = previousBalance + depositAmount;
    const totalBalance = setTextValueById('balance', newBalanceTotal);


})

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // this is for withdraw amount
    const withdrawAmount = getInputFieldById('withdraw-amount');
    const previousWithdrawAmount = getTextFieldById('withdraw');
    const newTotalWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    const totalWithdrawAmount = setTextValueById('withdraw', newTotalWithdrawAmount);

    // this is for balance
    const previousBalance = getTextFieldById('balance');
    const newBalanceTotal = previousBalance - withdrawAmount;
    const totalBalance = setTextValueById('balance', newBalanceTotal);


})
