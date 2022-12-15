import { ITheme } from "../../models/Theme";

type IThemeAction = { type: "SET_THEME"; payload: string };

export const ThemeReducer = (state: ITheme, action: IThemeAction) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_THEME":
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};
