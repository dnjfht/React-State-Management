// useState or useReducer + Context Api = 전역 상태 관리

import { createContext, useReducer } from "react";

const initialTheme = "dark";
const initialUser = { name: "Guest" };

export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();
export const UserContext = createContext();
export const UserDispatchContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state === "light" ? "dark" : "light";
    case "DARK":
      return "dark";
    case "LIGHT":
      return "light";
    default:
      throw new Error(`Unknown action type : ${action.type}`);
  }
}

function userReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, name: state.name === "Guest" ? "유승민" : "Guest" };
    case "LOGOUT":
      return { ...state, name: initialUser.name };
    case "NAME_UPDATE":
      return { ...state, name: action.newUserName };
    default:
      throw new Error(`Unknown action type : ${action.type}`);
  }
}

export default function GlobalContextProvider({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, initialTheme);
  const [user, userDispatch] = useReducer(userReducer, initialUser);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={themeDispatch}>
        <UserContext.Provider value={user}>
          <UserDispatchContext.Provider value={userDispatch}>
            {children}
          </UserDispatchContext.Provider>
        </UserContext.Provider>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
