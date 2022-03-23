class TodoList {
    constructor(list = []) {
        this.todos = list
    }

    add(text) {
        let todo = new Todo(text)
        this.todos.push(todo)
    }

    delete(id) {
        let index = this.todos.findIndex((todo) => todo.id === id)
        this.todos.splice(index,1)
        return this.todos.elgnth
    }
}

class Todo {
    constructor(text) {
        this.text = text
        this.isDone = false
        this.id = `id-${Date.now()}`
    }
}