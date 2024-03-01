const currentAnswer = document.querySelector('#current-answer');
const oldAnswer = document.querySelector('#old-answer');
let oldAnswerTotal = '-';
let currentNum = [];
let secondNum = null;
let operand = null;
let total = null;
let totalStr = [];


function checkOperand(){
    const lastNum = totalStr.slice(-1);
    
    console.log(totalStr.length)
    if (lastNum == '+' ||
        lastNum == '-' ||
        lastNum == '*' ||
        lastNum == '/' ||
        totalStr.length == 0
        ){

    } else {
        totalStr.push(operand);
        console.log(totalStr.join(''));
        console.log(totalStr);
    };
}

function getTotal(){
    total = totalStr.join('')
    return new Function('return ' + total)();
};

document.addEventListener('click', function(event){
    // console.log(totalStr)
    if (event.target.id === 'equal' && totalStr.length >= 3){
        currentAnswer.textContent = getTotal();
        oldAnswerTotal = `${totalStr.join('')} = ${getTotal()}`;
        totalStr = [];
        currentNum = [];
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
        

    } else if (event.target.id === 'negative'){
        if (parseInt(currentNum.join('')) > 0){
            const currentNumStr = currentNum.toString().replace(/\,/g, '')
            totalStr.splice(-currentNum.length, currentNum.length, `(-${currentNumStr})`);
            currentNum.splice(-currentNum.length, currentNum.length, `-${currentNumStr}`);
            currentAnswer.textContent = currentNum;
        } else {
            const currentNumStr = currentNum.toString().replace(/[\,-]/g, '')
            totalStr.splice(-currentNum.length, currentNum.length, `(${currentNumStr})`);
            currentNum.splice(-currentNum.length, currentNum.length, `${currentNumStr}`);
            currentAnswer.textContent = currentNum;
        };
    } else if (event.target.id === 'decimal'){
        if (currentNum.includes('.')){
        } else {
            operand = '.'
            checkOperand();
            currentNum.push('.')
            currentAnswer.textContent = currentNum.join('');
        };
    } else if (event.target.className === 'main'){      
        currentNum.push(event.target.textContent)
        totalStr.push(event.target.textContent);
        currentAnswer.textContent = currentNum.join('');
    };
    console.log(totalStr)
    console.log(currentNum)
});