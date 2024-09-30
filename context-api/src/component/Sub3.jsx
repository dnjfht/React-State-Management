import { useContext } from "react";
import { ThemeContext } from "../contextApi/context";

export default function Sub3() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h1>Hello World!</h1>
    </div>
  );
}
