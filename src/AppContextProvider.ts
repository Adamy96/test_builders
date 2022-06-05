import { LoadingProvider, ThemeProvider, UserProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [LoadingProvider, ThemeProvider, UserProvider]

const AppContextProvider = combineComponents(...providers)
export default AppContextProvider
