import { useEffect } from 'react'
import './ThemeSwitch.css'
import { useTheme, useThemeDispatch } from '@/store/Theme'
// eslint-disable-next-line import/no-unresolved
import IconSun from '~icons/heroicons-outline/sun'
// eslint-disable-next-line import/no-unresolved
import IconMoon from '~icons/heroicons-outline/moon'

export default function ThemeSwitch(): JSX.Element {
  const theme = useTheme()
  const dispatch = useThemeDispatch()

  function handleClick() {
    dispatch({
      type: 'toggle-theme',
    })
  }

  useEffect(() => {
    const html = document.documentElement
    if (theme.darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [theme])

  return (
    <button
      onClick={handleClick}
      type="button"
      role="switch"
      aria-checked={!theme.darkMode}
      className="switch"
      aria-label="toggle theme"
    >
      <span aria-hidden="true">
        {theme.darkMode ? <IconMoon /> : <IconSun />}
      </span>
    </button>
  )
}
