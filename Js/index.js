let input1 = document.getElementById("number1")
let input2 = document.getElementById("number2")

let operationsButton = document.getElementsByClassName('operation-button');

function makeOperation(operationCode) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    switch (operationCode) {
        case '+':
            alert(number1 + number2);
            break;
        case '-':
            alert(number1 - number2);
            break;
        case '*':
            alert(number1 * number2);
            break;
        case '/':
            alert(number1 / number2);
            break;
        case '%':
            alert(number1 % number2);
            break;

        default:
            input1.value = '';
            input2.value = '';

    }
}

for (let i = 0; i < operationsButton.length; i++) {
    operationsButton[i].addEventListener('click', onOperationButtonClick);
}


function onOperationButtonClick(eventObj) {
    let clickEl = eventObj.currentTarget;
    let operation = clickEl.innerHTML;
    makeOperation(operation);

}


