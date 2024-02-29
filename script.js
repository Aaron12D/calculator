const currentAnswer = document.querySelector('#current-answer');
const oldAnswer = document.querySelector('#old-answer');
let oldAnswerTotal = '-';
let currentNum = [];
let secondNum = null;
let operand = null;
let total = null;
let totalStr = [];


function checkOperand(){
    const lastNum = parseInt(totalStr.slice(-1));
    if (isNaN(lastNum)){
    } else {
        totalStr.push(operand);
        console.log(totalStr.join(''));
        
        currentNum = [];
        // const reversedStr = totalStr.slice().reverse().join('')
        // currentAnswer.textContent = `${reversedStr}`;
        console.log(totalStr);
    };
}

function getTotal(){
    total = totalStr.join('')
    return new Function('return ' + total)();
};

document.addEventListener('click', function(event){
    console.log(event.target.className)
    if (event.target.id === 'equal' && totalStr.length >= 3){
        currentAnswer.textContent = getTotal();
        oldAnswerTotal = `${getTotal()} = ${totalStr.join('')}`;
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
    } else if (event.target.id === 'minus'){
        operand = '-';
        checkOperand();
    } else if (event.target.id === 'multiply'){
        operand = '*'
        checkOperand();
    } else if (event.target.id === 'divide'){
        operand = '/'
        checkOperand();
    } else if (event.target.id === 'percent'){
        checkOperand();
    } else if (event.target.id === 'negative'){
        if (parseInt(currentNum.join('')) > 0){
            totalStr.splice(-currentNum.length, currentNum.length, `-${currentNum}`);
            currentNum.splice(-currentNum.length, currentNum.length, `-${currentNum}`)
            const reverseNum = currentNum.splice().reverse().join('');
            currentAnswer.textContent = reverseNum;
        };
        console.log(currentNum)
        
    } else if (event.target.id === 'decimal'){

    } else if (event.target.className === 'main'){      
        currentNum.push(event.target.textContent)
        totalStr.push(event.target.textContent);
        currentAnswer.textContent = currentNum.join('');
    };
    

    // } else if (event.target.id === 'seven'){
        
    // } else if (event.target.id === 'eight'){

    // } else if (event.target.id === 'nine'){

    // } else if (event.target.id === 'four'){

    // } else if (event.target.id === 'five'){

    // } else if (event.target.id === 'six'){

    // } else if (event.target.id === 'one'){

    // } else if (event.target.id === 'two'){

    // } else if (event.target.id === 'three'){

    // } else if (event.target.id === 'zero'){

    // };
});