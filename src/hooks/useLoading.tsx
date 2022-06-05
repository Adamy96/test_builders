import { useContext } from 'react'
import { LoadingContext } from '@context/loading'

const useLoading = () => {
  const { loadingState, setLoadingState } = useContext(LoadingContext)

  const updateWeatherLoading = (value: boolean) => {
    setLoadingState({
      ...loadingState,
      weatherLoading: value
    })
  }

  return {
    loadingState,
    updateWeatherLoading
  }
}

export default useLoading