import { useContext } from "react";
import { ThemeContext } from "../contextApi/context";
import Sub3 from "./Sub3";

export default function Sub2() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h1>Hello World!</h1>
      <Sub3 />
    </div>
  );
}
