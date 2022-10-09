import {lazy} from 'react'

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // TEST CODE!!!
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))