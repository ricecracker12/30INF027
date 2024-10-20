function performCalculation(operation, num1Id, num2Id, resultId) {
    const num1 = parseFloat(document.getElementById(num1Id).value);
    const num2 = parseFloat(document.getElementById(num2Id).value);
    const add = document.getElementById('resultadd');
    const sub = document.getElementById('resultsub');
    const mul = document.getElementById('resultmul');
    const div = document.getElementById('resultdiv');
    let result;
    const remove = document.querySelectorAll('.red');
    remove.forEach(function (element) {
        element.classList.remove('red');
    });

    if (isNaN(num1) || isNaN(num2)) {
        result = "X";
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                add.innerHTML = `<p class = "red margin">${num1} + ${num2} = ${result}</p>`
                break;
            case '-':
                result = num1 - num2;
                sub.innerHTML = `<p class = "red margin">${num1} - ${num2} = ${result}</p>`
                break;
            case '*':
                result = num1 * num2;
                mul.innerHTML = `<p class = "red margin">${num1} * ${num2} = ${result}</p>`
                break;
            case '/':
                if (num2 === 0) {
                    result = "X";
                } else {
                    result = num1 / num2;
                    div.innerHTML = `<p class = "red margin">${num1} / ${num2} = ${result}</p>`
                }
                break;
            default:
                result = "X";
        }
    }

    document.getElementById(resultId).value = result;
}