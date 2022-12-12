import React from 'react'
import { TodoListItemType } from "../AppContainer";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todoList: Array<TodoListItemType>;
  toggleTodo: (no: number) => void;
  deleteTodo: (no: number) => void;
}

const TodoList = (props: TodoListProps) => {
  let items = props.todoList.map((item) => {
    return <TodoListItem key={item.no} todoItem={item} toggleTodo={props.toggleTodo} deleteTodo={ props.deleteTodo}/>
  })

  return (
    <div className='row'>
      {" "}
      <div className='col'>
        <ul className='list-group'>{ items }</ul>
      </div>
    </div>
  )
}

export default TodoList