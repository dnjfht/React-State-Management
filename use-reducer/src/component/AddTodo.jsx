import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="write name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={content}
        placeholder="write content..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(name, content);
          setName("");
          setContent("");
          alert("todo가 추가되었습니다!");
        }}
      >
        Add
      </button>
    </div>
  );
}
