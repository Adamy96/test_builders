// @ts-nocheck
import React, { createContext, useState } from 'react'

interface ILoadingState {
  weatherLoading: boolean
}

interface IContextState {
  loadingState: ILoadingState
  setLoadingState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: ILoadingState = {
  weatherLoading: false
}

export const LoadingContext = createContext<IContextState>(null)

const LoadingContextProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(initialState)
  return (
    <LoadingContext.Provider
      value={{
        loadingState,
        setLoadingState
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider