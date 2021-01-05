import { TOKEN_STORAGE_KEY } from './../constants/common'
// import {TOKEN_STORAGE_KEy} from

export const setAuthToken = (token: string, persist: boolean) =>
  persist ? localStorage.setItem(TOKEN_STORAGE_KEY, token) : sessionStorage.setItem(TOKEN_STORAGE_KEY, token)

export const getAuthToken = () => localStorage.getItem(TOKEN_STORAGE_KEY) || sessionStorage.getItem(TOKEN_STORAGE_KEY)

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY)
  sessionStorage.removeItem(TOKEN_STORAGE_KEY)
}
