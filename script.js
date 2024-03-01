const currentAnswer = document.querySelector('#current-answer');
const oldAnswer = document.querySelector('#old-answer');
let oldAnswerTotal = '-';
let currentNum = [];
let operand = null;
let total = null;
let totalStr = [];


function checkOperand(){
    const lastNum = totalStr.slice(-1);
    if (lastNum == '+' ||
        lastNum == '-' ||
        lastNum == '*' ||
        lastNum == '/' ||
        totalStr.length == 0
        ){
    } else if (event.target.textContent == '.'){
        currentNum.push('.')
        totalStr.splice(-1, 1, `(${currentNum.join('')})`);
    } else {
        totalStr.push(operand);
    };
}

function getTotal(){
    total = totalStr.join('')
    return new Function('return ' + total)();
};

document.addEventListener('click', function(event){
    console.log(totalStr)
    if (event.target.id === 'equal' && totalStr.length >= 3){
        currentAnswer.textContent = Math.round(getTotal() * 10000) / 10000;
        oldAnswerTotal = `${totalStr.join('')} = ${Math.round(getTotal() * 10000) / 10000}`;
        totalStr = [`${Math.round(getTotal() * 10000) / 10000}`];
        currentNum = [`${Math.round(getTotal() * 10000) / 10000}`];
    } else if (event.target.id === 'clear'){
        totalStr = [];
        currentNum = [];
        currentAnswer.textContent = 0;
        oldAnswer.textContent = oldAnswerTotal;
    } else if (event.target.id === 'plus'){
        operand = '+';
        checkOperand();
        currentNum = [];
    } else if (event.target.id === 'minus'){
        operand = '-';
        checkOperand();
        currentNum = [];
    } else if (event.target.id === 'multiply'){
        operand = '*'
        checkOperand();
        currentNum = [];
    } else if (event.target.id === 'divide'){
        operand = '/'
        checkOperand();
        currentNum = [];
    } else if (event.target.id === 'percent'){
        if (currentNum.length > 0 && totalStr.length <= 1){
            currentAnswer.textContent = (parseInt(currentNum.join('')) / 100);
            oldAnswerTotal = `${parseInt(currentNum.join(''))}/100 = ${parseInt(currentNum.join(''))/100}`
            totalStr = [`${parseInt(currentNum.join('')) / 100}`];
            currentNum = [];
        };
    } else if (event.target.id === 'negative'){
        if (parseInt(currentNum.join('')) > 0){
            const currentNumStr = currentNum.toString().replace(/\,/g, '')
            totalStr.splice(-1, 1, `(-${currentNumStr})`);
            currentNum.splice(-currentNum.length, currentNum.length, `-${currentNumStr}`);
            currentAnswer.textContent = currentNum;
        } else if (parseInt(currentNum.join('')) < 0){
            const currentNumStr = currentNum.toString().replace(/[\,-]/g, '')
            totalStr.splice(-1, 1, `${currentNumStr}`);
            currentNum.splice(-currentNum.length, currentNum.length, `${currentNumStr}`);
            currentAnswer.textContent = currentNum;
        };
    } else if (event.target.id === 'decimal'){
        if (totalStr.slice(-1).toString().split('').includes('.') || totalStr.length == 0){
        } else {
            operand = '.'
            checkOperand();
            currentAnswer.textContent = currentNum.join('');
        };
    } else if (event.target.className === 'main'){  
        if (currentNum.length == 0){
            currentNum.push(event.target.textContent);
            totalStr.push(event.target.textContent)
            currentAnswer.textContent = event.target.textContent;
        } else {
            currentNum.push(event.target.textContent)
            totalStr.splice(-1, 1, `(${currentNum.join('')})`);
            currentAnswer.textContent = currentNum.join('');
        }
    };
});