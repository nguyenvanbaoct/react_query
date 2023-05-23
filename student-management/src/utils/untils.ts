import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObj = Object.fromEntries([...searchParams])
  return searchParamsObj
}

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
