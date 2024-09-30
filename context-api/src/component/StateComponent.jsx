import { useContext } from "react";
import {
  ThemeContext,
  ThemeDispatchContext,
  UserContext,
  UserDispatchContext,
} from "../contextApi/StateContext";

const THEMES = {
  light: {
    backgroundColor: "#EEEEEE",
    color: "black",
    togglerColor: "#3333333",
  },
  dark: {
    backgroundColor: "#333333",
    color: "white",
    togglerColor: "orange",
  },
};

export default function StateComponent() {
  const themeType = useContext(ThemeContext);
  const { name } = useContext(UserContext);
  const themeDispatch = useContext(ThemeDispatchContext);
  const userDispatch = useContext(UserDispatchContext);

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: `${THEMES[themeType].backgroundColor}`,
        color: `${THEMES[themeType].color}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: 80,
          height: 80,
          borderRadius: "100%",
          backgroundColor: `${THEMES[themeType].togglerColor}`,
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => themeDispatch({ type: "TOGGLE" })}
      >
        {themeType === "light" ? "Dark" : "Light"}
      </button>
      <button
        style={{
          width: 80,
          height: 80,
          marginTop: "10px",
          borderRadius: "100%",
          backgroundColor: "#121212",
          color: "white",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => userDispatch({ type: "TOGGLE" })}
      >
        {name === "Guest" ? "Login" : "LogOut"}
      </button>

      <h1
        onClick={() =>
          userDispatch({ type: "NAME_UPDATE", newUserName: "유승민" })
        }
      >
        {`안녕하세요, ${name}님!`}
      </h1>
    </div>
  );
}
