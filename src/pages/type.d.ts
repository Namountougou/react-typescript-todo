type Todo = {
  id: number;
  title: string;
  completed?: false;
};
type OnCompleted = (selectedTodo: Todo) => void;
type AddTodo = {
  newTodo: string;
  setTodos: any;
  todos: Todo[];
};
