import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'


export const useLightMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  useEffect(() => {
    value ? document.body.classList.add('light-mode') : document.body.classList.remove('light-mode')

  },[value])
  return [value, setValue]
}