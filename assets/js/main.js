// class todo
const todo = new todos();
const btnShowModal = document.getElementById('show-modal');
const btnHideModal = document.getElementById('hide-modal');
const btnAddTodo = document.getElementById('add-todo');
const list = document.querySelector('.list');
const modal = document.querySelector('.modal_add_todo');
const bgModal = document.querySelector('.bg_modal');
const inputAddTodo = document.getElementById('input-add-todo');

/**
 * 
 * ================================== MODAL ==================================
 * 
 */

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
    inputAddTodo.focus();
    console.log();
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


/**
 * 
 * ================================== CREATE TODO ==================================
 * 
 */

function createHtmlTodo(title, completed) {
    const html = `
        <li>
            <label class="task_list_item ${completed ? "completed" : ""}">
                <input type="checkbox" class="task_input"/>
                <span class="task_title">${title}</span>
            </label>
            <button class="remove_todo"><i class='bx bx-trash'></i></button>
        </li>
    `;
    list.innerHTML += html;
}

function addTodo() {
    // create todo into todo object
    todo.createTodo(inputAddTodo.value);
    createHtmlTodo(inputAddTodo.value);

    localStorage.setItem('todo', JSON.stringify(todo));

    // reset value of input
    inputAddTodo.value = '';

    // hide modal
    toggleTodo();

    // refresh functions
    deleteTodo();
    checkTodo();
}

/**
 * 
 * ================================== CHECKED TODO ==================================
 * 
 */

function checkTodo() {
    const checkedElements = ['.task_input', '.task_title'];

    for (let i = 0; i < checkedElements.length; i++) {
        document.querySelectorAll(checkedElements[i]).forEach(element => {
            element.addEventListener('click', function() {

                const title = element.parentElement.querySelector('.task_title').innerText;
                todo.checkTodo(title);
                localStorage.setItem('todo', JSON.stringify(todo));

                if (element.parentElement.classList.contains('completed')) {
                    element.parentElement.classList.remove('completed');
                } else {
                    element.parentElement.classList.add('completed');
                }

            });
        });
        return true;
    }
}


/**
 * 
 * ================================== DELETE TODO ==================================
 * 
 */

function deleteTodo() {
    const btnDeleteTodo = document.querySelectorAll('.remove_todo');

    btnDeleteTodo.forEach(btn => {
        btn.addEventListener('click', function() {
            const title = this.parentElement.querySelector('.task_title').innerText;
            todo.removeTodo(title);
            this.parentElement.remove();
            localStorage.setItem('todo', JSON.stringify(todo));
        });
    });
}


/**
 * 
 * ================================== TODO LOCAL STORAGE ==================================
 * 
 */

if (localStorage.getItem('todo')) {

    for (let i = 0; i < JSON.parse(localStorage.getItem('todo')).todos.length; i++) {
        todo.createTodo(JSON.parse(localStorage.getItem('todo')).todos[i].title, JSON.parse(localStorage.getItem('todo')).todos[i].completed);
        createHtmlTodo(JSON.parse(localStorage.getItem('todo')).todos[i].title, JSON.parse(localStorage.getItem('todo')).todos[i].completed);
    }

    todo.getTodo();

    // delete todo function
    deleteTodo();
    checkTodo();
}