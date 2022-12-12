import React from 'react'
import { TodoListItemType } from "../AppContainer";

type TodoListItemProps = {
  todoItem: TodoListItemType;
  toggleTodo: (no: number) => void;
  deleteTodo: (no: number) => void;
}

const TodoListItem = (props: TodoListItemProps) => {
  let itemClassName = 'list-group-item';
  if (props.todoItem.done) itemClassName += ' active';

  return (
    <li className={itemClassName}>
      <span className={props.todoItem.done ? 'todo-done pointer' : 'pointer'}
        onClick={ () => props.toggleTodo(props.todoItem.no)}
      >
        {props.todoItem.todo}
        {props.todoItem.done ? "DONE" : ""}
      </span>
      <span className='float-end badge bg-secondary pointer' onClick={() => props.deleteTodo(props.todoItem.no)}>
        remove
      </span>
    </li>
  )
}

export default TodoListItem