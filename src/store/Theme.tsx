import * as React from "react";
import { useReducer, createContext, useContext } from "react";

interface ThemeContext {
  darkMode: boolean;
}

interface Action {
  readonly type: "toggle-theme";
}

export const ThemeContext = createContext<ThemeContext | null>(null);
export const ThemeDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

const initialTheme: Readonly<ThemeContext> = { darkMode: false };

function themeReducer(
  theme: Readonly<ThemeContext>,
  action: Action
): Readonly<ThemeContext> {
  switch (action.type) {
    case "toggle-theme": {
      return { darkMode: !theme.darkMode };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): Readonly<ThemeContext> {
  return useContext(ThemeContext) as Readonly<ThemeContext>;
}

export function useThemeDispatch(): React.Dispatch<Action> {
  return useContext(ThemeDispatchContext) as React.Dispatch<Action>;
}

export default ThemeProvider;
