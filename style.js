/* Grabing the display */
const display = document.querySelector('.display');
display.textContent = "0";

/* Grabbing the numbers clicked */
const numbers = document.querySelector('.numbers');
numbers.addEventListener('click',function(e){
    if(e.target.textContent == '=')
        {
        let answer = display.textContent;
        display.textContent = eval(display.textContent);
    }
    else if(display.textContent == '0')
        display.textContent = e.target.textContent;
    else{
        display.textContent = display.textContent + e.target.textContent;
    }
    window.navigator.vibrate(20);
});

/* Grabbing the operators when clicked */
const operators = document.querySelector('.operators');
operators.addEventListener('click',function(e){
    if(display.textContent == '0')
        {}
    else{
        display.textContent = display.textContent + e.target.textContent;
    }
    window.navigator.vibrate(20);
});

/* Clearing the display when Clr is clicked */
const clear = document.querySelector('.areset');
clear.addEventListener('click',function(){
    display.textContent = "0";
    window.navigator.vibrate(20);
});

/* Deleting the prevous content */
const dele = document.querySelector('.adel');
dele.addEventListener('click',function(){
    display.textContent = display.textContent.slice(0, -1);
    window.navigator.vibrate(20);
});

/* hardmath calculations */
const hardmath = document.querySelector('.hardmath');
hardmath.addEventListener('click',function(e){
    switch(e.target.className){
        case 'asqrt': display.textContent = Math.sqrt(display.textContent);
            break;
        case 'acubert': display.textContent = Math.cbrt(display.textContent);
            break;
        case 'asin': display.textContent = Math.sin(display.textContent);
            break;
        case 'acos': display.textContent = Math.cos(display.textContent);
            break;
        case 'atan': display.textContent = Math.tan(display.textContent);
            break;
        case 'aexp': display.textContent = Math.exp(display.textContent);
            break;
        case 'alog10': display.textContent = Math.log10(display.textContent);
            break;
        case 'aloge': display.textContent = Math.log(display.textContent);
            break;
    }
    window.navigator.vibrate(20);
});
