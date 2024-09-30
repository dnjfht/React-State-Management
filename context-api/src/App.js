import { useContext } from "react";
import { ThemeContext } from "./contextApi/context";
import Sub1 from "./component/Sub1";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{ border: "1px solid blue" }}>
      <div style={theme}>
        <h1>Hello World!</h1>
        <Sub1 />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
