let inData = document.querySelector('#inData'),
btn = document.querySelector('.btn'),
todoList = document.querySelector('.todoList');

funcClick=()=> {
    if(inData.value !== ''){
        
        let field = document.createElement('li'),
        check = document.createElement("input"),
        buttonDel = document.createElement("input");
    
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
btn.addEventListener('click', funcClick);

toDoDelete=(buttonDel)=> {
    buttonDel.addEventListener("click", (event) => {
        buttonDel.parentElement.remove();
        event.stopPropagation
    });
}

clickChecked=(check, field)=> {
    check.addEventListener('click', () => {
        field.classList.toggle('checked');
        field.classList.toggle('sendField');
    })
};