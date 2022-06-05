import { useContext } from 'react'
import { darkTheme } from '@themes'
import { ThemeContext } from '@context/theme'

const useTheme = () => {
  const { themeState, setThemeState } = useContext(ThemeContext)

  const setTheme = (theme: ThemeType) => {
    if (theme !== themeState.theme) {
      setThemeState({ theme }) // Updating context
      setCustomTheme(theme) // Updating :root variables
    }
  }

  const setCustomTheme = (theme: string) => {
    if (theme === 'dark') {
      document.head.innerHTML += `<style id="darkTheme">
      :root {
        ${Object.keys(darkTheme)
          .map((variableName) => `${variableName}: ${darkTheme[variableName]};`)
          .join('')}
      }
      </style>`
    } else {
      const styleTag = document.getElementById('darkTheme')
      if (!styleTag) return
      styleTag?.parentElement?.removeChild(styleTag)
    }
  }

  return {
    currentTheme: themeState.theme,
    setTheme,
    themeState
  }
}

export default useTheme