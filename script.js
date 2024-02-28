const currentAnswer = document.querySelector('#current-answer');
let total = null;
let totalStr = ['1', '+' , '2'];

function checkOperand(event){
    if (currentAnswer.textContent){

    }
}
function getTotal(){
    total = totalStr.join('')
    currentAnswer.textContent = total
};
getTotal();

document.addEventListener('click', function(event){
    console.log(event.target.id)
    if (event.target.id === 'equal'){
        currentAnswer.textContent = total
    } else if (event.target.id === 'clear'){
        total
    } else if (event.target.id === 'plus'){

    } else if (event.target.id === 'minus'){
        
    } else if (event.target.id === 'multiply'){

    } else if (event.target.id === 'divide'){

    } else if (event.target.id === 'percent'){

    } else if (event.target.id === 'negative'){

    } else if (event.target.id === 'seven'){
        
    } else if (event.target.id === 'eight'){

    } else if (event.target.id === 'nine'){

    } else if (event.target.id === 'four'){

    } else if (event.target.id === 'five'){

    } else if (event.target.id === 'six'){

    } else if (event.target.id === 'one'){

    } else if (event.target.id === 'two'){

    } else if (event.target.id === 'three'){

    } else if (event.target.id === 'zero'){

    };
});