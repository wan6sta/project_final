import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import 'app/styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import {cn} from 'shared/lib/classNames/cn'

export const App = () => {
  const {theme, changeTheme} = useTheme()

  return <div className={cn('app', {}, [theme])}>
    <Link to={'/'}>MAIN</Link>
    <Link to={'/about'}>ABOUT</Link>

    <button onClick={changeTheme}>Change theme</button>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/about'} element={<AboutPage/>}/>
        <Route path={'/'} element={<MainPage/>}/>
      </Routes>
    </Suspense>
  </div>
}