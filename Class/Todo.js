class Todo {
  #description;
  #status;

  setTask(description, status) {
    this.#description = description;
    this.#status = status;
  }

  getTask() {
    return this.#status;
  }
}

const myTask = new Todo();
myTask.setTask("To draw", "Active");
console.log(myTask.getTask());
