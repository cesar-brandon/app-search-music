import { useReducer } from "react";
import { getDefaultTheme } from "../../utils/getDefaultTheme";
import { ThemeContext } from "./ThemeContext";
import { ThemeReducer } from "./ThemeReducer";

const INITIAL_STATE = {
  theme: getDefaultTheme(),
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function ThemeProvider({ children }: Props) {
  const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);
  const setTheme = (themeName: string) => {
    localStorage.setItem("default-theme", themeName);
    dispatch({
      type: "SET_THEME",
      payload: themeName,
    });
  };

  return (
    <ThemeContext.Provider value={{ state, setTheme }}>
      <div className={`theme-${state.theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
