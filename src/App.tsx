import './index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {Suspense} from 'react'

export const App = () => {
  return <div className='app'>
    <Link to={'/'}>MAIN</Link>
    <Link to={'/about'}>ABOUT</Link>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/about'} element={<AboutPageAsync/>}/>
        <Route path={'/'} element={<MainPageAsync/>}/>
      </Routes>
    </Suspense>
  </div>
}