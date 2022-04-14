import { useReducer, createContext, useContext } from 'react'

export const ThemeContext = createContext(null)
export const ThemeDispatchContext = createContext(null)

function themeReducer(theme, action) {
  switch (action.type) {
    case 'toggle-theme': {
      return { darkMode: !theme.darkMode }
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}

const initialTheme = { darkMode: false }

export default function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme)

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext)
}
