import { useContext } from "react";
import { ThemeContext } from "../contextApi/context";
import Sub2 from "./Sub2";

export default function Sub1() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{ border: "1px solid green" }}>
      <div style={theme}>
        <h1>Hello World!</h1>
        <Sub2 />
      </div>
    </ThemeContext.Provider>
  );
}
