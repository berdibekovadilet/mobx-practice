import { observer } from "mobx-react-lite";
import todo from "../store/todo";
import { useState } from "react";

const Todo = observer(() => {
  const [item, setItem] = useState({});
  const addNewTodo = (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: e.target.value,
      completed: false,
    };
    setItem(newTodo);
  };
  return (
    <div className="todoWrapper">
      <div className="addTodoWrapper">
        <input type="text" onChange={(e) => addNewTodo(e)} />
        <button onClick={() => todo.addTodo(item)}>Добавить</button>
      </div>
      {todo.todos.map((t) => (
        <div key={t.id} className="todo">
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => todo.completeTodo(t.id)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
