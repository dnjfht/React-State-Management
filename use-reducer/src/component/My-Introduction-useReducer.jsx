import { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "incremented_age": {
      return {
        age: state.age + 1,
        name: state.name,
      };
    }
    case "changed_name": {
      return {
        age: state.age,
        name: action.nextName,
      };
    }
  }

  throw Error("Unknown action: " + action.type);
};

function MyIntroduction() {
  const [userState, dispatch] = useReducer(countReducer, {
    age: 25,
    name: "유승민",
  });

  const handlePlusCountButtonClick = () => {
    dispatch({ type: "incremented_age" });
  };

  const handleChangeName = (e) => {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeName}
        placeholder="write name plz..."
      />
      <button onClick={handlePlusCountButtonClick}>Increment age</button>
      <p>
        Hello! My name is {userState.name}...! I'm {userState.age} years old..!
      </p>
    </div>
  );
}

export default MyIntroduction;
