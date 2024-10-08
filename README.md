# React-State-Management
React 상태 관리.

상태 관리라는 말은 애플리케이션의 상태를 효율적으로 관리하는 것을 말한다.</br>
UI는 사용자의 interaction에 따라서 동적으로 변해야 하고, 유저의 입력 값, 서버와의 통신 등 다양한 상태를 관리하게 되는데,<br/>
적절한 상태 관리 전략을 고려하지 않으면 대규모 애플리케이션의 개발 및 유지보수가 매우 어려워지므로</br>
상태를 효율적으로 관리할 필요성이 있는 것이다.
<br/>
<h2>[상태 관리 : Local State Management]</h2>
<p>상태를 내부적으로 관리하는 방법.<br/>
컴포넌트 내부에서만 상태를 관리하므로 불필요한 렌더링을 줄일 수 있고,<br/>
사용법이 간단해 소규모 애플리케이션을 만드는데 무리가 없을 것이다.</p>

1. useState hook<br/>
React를 사용하는 개발자에겐 기본 중의 기본(많이 사용하는).    
2. useReducer hook<br/>
상태가 복잡하거나 상태 관리 로직이 복잡한 경우에는 reducer 함수와 dispatch를 이용한 useReducer hook을 사용.<br/>
useReducer를 컴포넌트의 최상위에 호출하고, reducer를 사용해 state를 관리한다.
<br/>

```ruby
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
```

<br/>
<h2>[전역 상태 관리 : Global State Management]</h2>
<p>그러나 애플리케이션의 규모가 커지게 되면 상태가 여러 컴포넌트에 분산되게 되어 관리가 어려워지고,<br/>
흔히 말하는 Prop drilling 문제가 발생할 수 있다.<br/>
이런 문제를 해결하기 위하여 전역 상태 관리를 사용할 수 있다.</p>
