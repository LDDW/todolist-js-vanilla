// class todo
const todo = new todos();
const btnShowModal = document.getElementById('show-modal');
const btnHideModal = document.getElementById('hide-modal');
const btnAddTodo = document.getElementById('add-todo');
const btnsRemoveTodo = document.querySelectorAll('.remove_todo');
const btnsCompletedTodo = document.querySelectorAll('.completed_task');
const list = document.querySelectorAll('li');
const modal = document.querySelector('.modal_add_todo');
const bgModal = document.querySelector('.bg_modal');
const inputAddTodo = document.querySelector('#input-add-todo');

//toggle todo

function toggleTodo() {
    if (bgModal.classList.contains('hide')) {
        bgModal.classList.replace('hide', 'show')
    } else {
        bgModal.classList.replace('show', 'hide')
    }
}

// show modal new todo
btnShowModal.addEventListener('click', function() {
    toggleTodo();
});

// hide modal new todo
btnHideModal.addEventListener('click', function() {
    toggleTodo();
});

// hide modal with bg modal 
bgModal.addEventListener('click', function(e) {
    const targets = ['.header_modal', '.header_modal>p', '.bx-x', '.content_modal', '#input-add-todo', '#add-todo']
    let isTarget = false;

    for (let i = 0; i < targets.length; i++) {
        if (e.target === document.querySelector(targets[i])) {
            isTarget = true;
        }
    }

    if (isTarget === false) {
        toggleTodo();
    }
});

function addTodo() {
    // create todo into todo object
    todo.createTodo(inputAddTodo.value);

    // add todo into html list

    // reset value of input
    inputAddTodo.value = '';

    // hide modal
    toggleTodo();

    // show todo object into console
    todo.getTodo();

}

btnAddTodo.addEventListener('click', function() {
    if (inputAddTodo.value !== '') {
        addTodo();
    }
});

inputAddTodo.addEventListener('keyup', function(e) {
    if (e.code === 'Enter' && this.value !== '') {
        addTodo();
    }
});

// remove todo
btnsRemoveTodo.forEach((btn, index) => {
    btn.addEventListener('click', function() {

        // remove todo into array
        todo.removeTodo(list[index].firstElementChild.textContent)

        // remove HTML element

        // show alert to confirm remove todo

    });
});


// update todo
btnsCompletedTodo.forEach((btn, index) => {
    btn.addEventListener('click', function() {

        // update status of todo
        todo.updateTodo(list[index].firstElementChild.textContent);

        // remove btn completed todo
        btn.remove();

        // create button 
        const button = document.createElement('button');
        button.innerHTML = '<i class=\'bx bx-trash\'></i>'
        button.className = 'remove_todo';

        // append button into todo item
        list[index].append(button);

    });
});