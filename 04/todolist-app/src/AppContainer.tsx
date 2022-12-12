import produce from "immer";
import { useState } from "react";
import App from "./components/App";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

const AppContainer = () => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([
    { no: 1, todo: 'Javascript', done: true },
    { no: 2, todo: 'Typescript', done: false },
    { no: 3, todo: 'React', done: false },
  ]);

  const addTodo = (todo: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });

    setTodoList(newTodoList);
  }

  const deleteTodo = (no: number) => {
    let index = todoList.findIndex(todo => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });

    setTodoList(newTodoList);
  }

  const toggleTodo = (no: number) => {
    let index = todoList.findIndex(todo => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });

    setTodoList(newTodoList);
  }

  return <App todoList={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />;
}

export default AppContainer;
