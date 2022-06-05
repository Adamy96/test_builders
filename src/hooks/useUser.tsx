import { useContext } from 'react'
import { UserContext } from '@context/user'

const useUser = () => {
  const { userState, setUserState } = useContext(UserContext)

  const updateUserState = (data: any) => {
    setUserState({
      ...userState,
      ...data
    })
  }

  return {
    userState,
    updateUserState
  }
}

export default useUser