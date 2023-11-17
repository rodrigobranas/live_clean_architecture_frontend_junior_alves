import axios from "axios";
import TodosGateway from "./TodosGateway";
import HttpClient from "./http/HttpClient";
import Todo from "../entities/Todo";

export default class TodosGatewayHttp implements TodosGateway {

	constructor (readonly httpClient: HttpClient) {
	}

	async getTodos (): Promise<Todo[]> {
		const todosData = await this.httpClient.get("http://localhost:3000/todos");
		const todos = [];
		for (const todoData of todosData) {
			todos.push(new Todo(todoData.description, todoData.done));
		}
		return todos;
	}

}
