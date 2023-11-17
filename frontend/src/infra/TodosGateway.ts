import Todo from "../entities/Todo";

export default interface TodosGateway {
	getTodos(): Promise<Todo[]>;
}
