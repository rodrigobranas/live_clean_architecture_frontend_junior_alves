<script setup lang="ts">
	import { inject, onMounted, ref } from 'vue';
	import TodosGateway from './infra/TodosGateway';
	import TodoList from './entities/TodoList';

	const todoList = ref(new TodoList());
	const description = ref("");
	
	onMounted(async () => {
		const todosGateway = inject("todosGateway") as TodosGateway;
		const todosData = await todosGateway.getTodos();
		todoList.value.todos = todosData;
	});
</script>

<template>
	<h5 class="total">{{ todoList.getTotal() }}</h5>
	<h5 class="progress">{{ todoList.getProgress() }}%</h5>
	<div v-for="todo in todoList.todos">
		<span class="todo-description">{{ todo.description }}</span>
		{{ todo.done }}
		<button class="todo-toggle-done-button" @click="todo.toggleDone()">done/undone</button>
	</div>
	<input class="new-todo-description" v-model="description" @keyup.enter="todoList.addTodo(description)"/>
</template>

<style>
</style>
