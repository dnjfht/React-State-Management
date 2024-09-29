import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const reducer = (state, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          content: action.content,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
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

export default function TodoList2() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
