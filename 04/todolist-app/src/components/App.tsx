import { TodoListItemType } from "../AppContainer";

type AppProps = {
  todoList: TodoListItemType[];
  addTodo: (todo: string) => void;
  deleteTodo: (no: number) => void;
  toggleTodo: (no: number) => void;
}

const App = (props: AppProps) => {
  return <></>
};

export default App;
