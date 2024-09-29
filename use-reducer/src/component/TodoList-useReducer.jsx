import { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.map((todo) => {
        if (todo.id === action.task.id) {
          return action.task;
        } else {
          return todo;
        }
      });
    }
    case "deleted": {
      return state.filter((todo) => todo.id !== action.id);
    }
    default: {
      throw Error("Unknown action :" + action.type);
    }
  }
};

export default function TodoList() {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: "added", id: nextId++, text: text });
  };

  const handleChangeTodo = (task) => {
    dispatch({ type: "changed", task: task });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "changed", id: id });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          placeholder="Add task..."
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => {
            setText("");
            handleAddTodo();
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {todoState.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.done} />
              {task.id === editingId && isEditing ? (
                <>
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                      handleChangeTodo({
                        ...task,
                        text: e.target.value,
                      });
                    }}
                    placeholder="Edit task..."
                  />
                  <button onClick={() => setIsEditing(false)}>Save</button>
                </>
              ) : (
                <>
                  {task.text}
                  <button
                    onClick={() => {
                      setEditingId(task.id);
                      setIsEditing(true);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}

              <button onClick={() => handleDeleteTodo(task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

let nextId = 3;
const initialState = [
  {
    id: 0,
    text: "Ride a bike.",
    done: false,
  },
  {
    id: 1,
    text: "Grocery shopping.",
    done: false,
  },
  {
    id: 2,
    text: "Learn to code.",
    done: false,
  },
];
