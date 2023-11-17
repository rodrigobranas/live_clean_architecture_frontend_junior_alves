import TodoList from "../src/entities/TodoList";

test("Deve testar uma todo list vazia", function () {
	const todoList = new TodoList();
	expect(todoList.getTotal()).toBe(0);
	expect(todoList.getProgress()).toBe(0);
});

test("Deve testar a todo list com 4 todos", function () {
	const todoList = new TodoList();
	const a = todoList.addTodo("A");
	const b = todoList.addTodo("B");
	const c = todoList.addTodo("C");
	const d = todoList.addTodo("D");
	a.toggleDone();
	expect(todoList.getTotal()).toBe(4);
	expect(todoList.getProgress()).toBe(25);
});

test("Deve testar a todo list com 2 todos e adicionar um todo", function () {
	const todoList = new TodoList();
	const a = todoList.addTodo("A");
	const b = todoList.addTodo("B");
	a.toggleDone();
	expect(todoList.getTotal()).toBe(2);
	expect(todoList.getProgress()).toBe(50);
	todoList.addTodo("C");
	expect(todoList.getTotal()).toBe(3);
	expect(todoList.getProgress()).toBe(33);
});
