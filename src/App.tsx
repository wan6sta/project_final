import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {Suspense} from 'react'
import {useTheme} from './theme/useTheme';

export const App = () => {
  const {theme, changeTheme} = useTheme()

  return <div className={`app ${theme}`}>
    <Link to={'/'}>MAIN</Link>
    <Link to={'/about'}>ABOUT</Link>

    <button onClick={changeTheme}>Change theme</button>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/about'} element={<AboutPageAsync/>}/>
        <Route path={'/'} element={<MainPageAsync/>}/>
      </Routes>
    </Suspense>
  </div>
}