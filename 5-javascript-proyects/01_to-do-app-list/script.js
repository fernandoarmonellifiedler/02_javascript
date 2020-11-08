var taskList = [];

let showList = document.getElementById('div-list-list');

let buttonInput = document.getElementById('button-submit');

buttonInput.addEventListener('click', () => {
    let taskInput = document.getElementById('form-input');
    taskList.push(taskInput.value);
    
    let elementAdded = document.createElement('li');
    let elementAddedText = document.createTextNode(taskInput.value);
    
    elementAdded.appendChild(elementAddedText);
    showList.appendChild(elementAdded);
    
    taskInput.value = '';
});



