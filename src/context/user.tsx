// @ts-nocheck
import React, { createContext, useState } from 'react'

interface IContextState {
  userState: IUser
  setUserState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: IUser = {
  lat: null,
  lon: null,
  weather: null
}

export const UserContext = createContext<IContextState>(null)

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState<IUser>(initialState)
  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
