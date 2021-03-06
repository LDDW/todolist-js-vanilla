class todos {

    constructor() {
        this.todos = [];
    }

    /**
     * @name createTodo
     * @param {string} title
     */
    createTodo(title, completed) {
        this.todos.push({
            title: title,
            completed: completed == undefined ? false : completed
        });
    }

    /**
     * @name checkTodo
     * @param {string} title
     */
    checkTodo(title) {
        this.todos.forEach(todo => {
            if (todo.title === title) {
                console.log(this.todos)
                todo.completed = !todo.completed;
            }
        });
    }

    /**
     * @name removeTodo
     * @param {string} title
     */
    removeTodo(title) {
        this.todos.forEach((todo, index) => {
            if (todo.title === title) {
                this.todos.splice(index, 1);
            }
        });
    }

    updateTodo(title) {
        this.todos.forEach(todo => {
            if (todo.title === title) {
                console.log(this.todos)
            }
        });
    }

    getTodo() {
        console.log(this.todos)
    }

}