import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    {
      id: 1,
      title: "Купить молоко",
      completed: false,
    },
    {
      id: 2,
      title: "Обменять деньги",
      completed: false,
    },
    {
      id: 3,
      title: "Пойти на обед",
      completed: false,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: any) {
    this.todos.push(todo);
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
