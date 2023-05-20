import store from 'store'

export const setLocalStorage = (
  key: string,
  value: string | { [key: string]: string }
) => {
  store.set(key, value)
}

export const getLocalStorage = (key: string) => {
  return store.get(key)
}

export const removeLocalStorage = (key: string) => {
  store.remove(key)
}
