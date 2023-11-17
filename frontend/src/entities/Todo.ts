export default class Todo {

	constructor (public description: string, public done: boolean = false) {
	}

	toggleDone () {
		this.done = !this.done;
	}
}
