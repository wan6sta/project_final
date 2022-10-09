import {lazy} from 'react'

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // TEST CODE!!!
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))