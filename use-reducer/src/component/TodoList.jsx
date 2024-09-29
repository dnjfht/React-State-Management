import Todo from "./Todo";

export default function TodoList({ todos, changeTodo, deleteTodo }) {
  return (
    <ul style={{ marginLeft: "-40px" }}>
      {todos.map((todo) => (
        <Todo todo={todo} changeTodo={changeTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
