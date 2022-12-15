import { createContext } from "react";
import { ITheme } from "../../models/Theme";

export type IThemeContextProps = {
  state: ITheme;
  setTheme: (themeName: string) => void;
};

export const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);
