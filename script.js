let inData = document.querySelector('#inData');
let btn = document.querySelector('.btn');
let todoList = document.querySelector('.todoList');

btn.addEventListener('click', funcClick);

function funcClick() {
    if(inData.value !== ''){
        
        let field = document.createElement('li');
        let check = document.createElement("input");
        let buttonDel = document.createElement("input");
    
        field.innerHTML = inData.value;
        todoList.appendChild(field);
    
        check.type = 'checkbox';
        check.className = 'mark';
    
        field.prepend(check);
    
        buttonDel.type = 'button';
        buttonDel.className = 'buttonDel';
        buttonDel.value = 'удалить';
        field.append(buttonDel);
        toDoDelete(buttonDel);
        clickChecked(check, field);
        inData.value = '';
}else{
    alert('Введите задачу!')
}
}

function toDoDelete(buttonDel) {
    buttonDel.addEventListener("click", () => {
        buttonDel.parentElement.remove();
    });
}

function clickChecked(check, field) {
    check.addEventListener('click', () => {
        field.classList.toggle('checked');
        field.classList.toggle('sendField');
    })
};