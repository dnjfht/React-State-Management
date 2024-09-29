import { useState } from "react";

export default function Todo({ todo, changeTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li
      key={todo.id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0 8px",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={todo.name}
            placeholder="Please write the name you want to edit..."
            onChange={(e) => {
              changeTodo({ ...todo, name: e.target.value });
            }}
          />
          <input
            type="text"
            value={todo.content}
            placeholder="Please write the content you want to edit..."
            onChange={(e) => {
              changeTodo({ ...todo, content: e.target.value });
            }}
          />
          <button
            onClick={() => {
              setIsEditing(false);
              alert("todo가 수정 완료되었습니다!");
            }}
          >
            Edit Success
          </button>
        </>
      ) : (
        <>
          <p>
            {todo.name}의 TodoList : {todo.content}
          </p>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        </>
      )}

      <button
        onClick={() => {
          deleteTodo(todo.id);
          alert("todo가 삭제 완료되었습니다!");
        }}
      >
        Delete
      </button>
    </li>
  );
}
