import { TodoListItemType } from "../AppContainer";

type AppProps = {
  todoList: TodoListItemType[];
  addTodo: (todo: string) => void;
  deleteTodo: (no: number) => void;
  toggleTodo: (no: number) => void;
}

const App = (props: AppProps) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: TodoList App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          {/* TODO: component */}
        </div>
      </div>
    </div>
  )
};

export default App;
