// useReducer + Immer => useImmerReducer

import { useImmerReducer } from "use-immer";
// import { useReducer } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

const reducer = (draft, action) => {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        name: action.name,
        content: action.content,
        done: false,
      });
      break;
    }
    case "changed": {
      const index = draft.findIndex((todo) => todo.id === action.todo.id);
      draft[index] = action.todo;
      break;
    }
    case "deleted": {
      return draft.filter((todo) => todo.id !== action.id);
    }
    default: {
      throw Error("Unknown action :" + action.type);
    }
  }
};

export default function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const handleAddTodo = (name, content) => {
    dispatch({ type: "added", id: nextId++, name: name, content: content });
  };

  const handleChangeTodo = (todo) => {
    dispatch({ type: "changed", todo: todo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "deleted", id: id });
  };

  return (
    <div>
      <AddTodo addTodo={handleAddTodo} />

      <TodoList
        todos={state}
        changeTodo={handleChangeTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

let nextId = 3;
const initialState = [
  {
    id: 0,
    name: "유승민",
    content: "내일도 코딩을 해야 합니다...",
    done: false,
  },
  {
    id: 1,
    name: "김지완",
    content: "내일은 맛있는 돼지고기 요리를 할 것입니다.",
    done: false,
  },
  {
    id: 2,
    name: "현지우",
    content: "내일은 운동을 할 거예요...!",
    done: false,
  },
];
