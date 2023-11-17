import Todo from "./Todo";

export default class TodoList {
	todos: Todo[];

	constructor () {
		this.todos = [];
	}

	addTodo (description: string) {
		const todo = new Todo(description);
		this.todos.push(todo);
		return todo;
	}

	getProgress () {
		const dones = this.todos.filter((todo: any) => todo.done);
		if (dones.length === 0) return 0;
		return Math.round((dones.length/this.todos.length)*100);
	}

	getTotal () {
		return this.todos.length;
	}

}
