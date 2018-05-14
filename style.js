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
});

/* Grabbing the operators when clicked */
const operators = document.querySelector('.operators');
operators.addEventListener('click',function(e){
    if(display.textContent == '0')
        {}
    else{
        display.textContent = display.textContent + e.target.textContent;
    }
});

/* Clearing the display when Clr is clicked */
const clear = document.querySelector('.areset');
clear.addEventListener('click',function(){
    display.textContent = "0";
});

/* Deleting the prevous content */
const dele = document.querySelector('.adel');
dele.addEventListener('click',function(){
    display.textContent = display.textContent.slice(0, -1);
})