'use strict'
let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function buttonClickHandler(event) {
    event.target.parentNode.style.background = 'lightgreen';
    event.target.innerText = 'Добавлено';           
    });
});		   
