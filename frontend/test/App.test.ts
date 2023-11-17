import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";
import TodosGatewayHttp from "../src/infra/TodosGatewayHttp";
import TodosGateway from "../src/infra/TodosGateway";
import Todo from "../src/entities/Todo";

function sleep (time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
}

test("Deve criar um todo", async function () {
	const todosGateway: TodosGateway = {
		async getTodos (): Promise<any> {
			return [
				new Todo("A"),
				new Todo("B"),
				new Todo("C")
			]
		}
	}
	const wrapper = mount(AppVue, {
		global: {
			provide: {
				todosGateway
			}
		}
	});
	await sleep(200);
	expect(wrapper.findAll(".todo-description").at(0)?.text()).toBe("A");
	expect(wrapper.findAll(".todo-description").at(1)?.text()).toBe("B");
	expect(wrapper.findAll(".todo-description").at(2)?.text()).toBe("C");
	expect(wrapper.get(".total").text()).toBe("3");
	expect(wrapper.get(".progress").text()).toBe("0%");
	await wrapper.findAll(".todo-toggle-done-button").at(0)?.trigger("click");
	expect(wrapper.get(".progress").text()).toBe("33%");
	await wrapper.get(".new-todo-description").setValue("D");
	await wrapper.get(".new-todo-description").trigger("keyup.enter");
	expect(wrapper.get(".total").text()).toBe("4");
	expect(wrapper.get(".progress").text()).toBe("25%");
});
