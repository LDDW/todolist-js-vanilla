class todos {

    constructor() {
        this.todos = [];
    }

    /**
     * @name createTodo
     * @param {string} title
     */
    createTodo(title) {
        this.todos.push({
            title,
            completed: false
        });
    }

    /**
     * @name removeTodo
     * @param {string} title
     * @returns {boolean}
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