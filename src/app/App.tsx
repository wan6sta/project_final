import 'app/styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {cn} from 'shared/lib/classNames/cn'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'

export const App = () => {
  const {theme, changeTheme} = useTheme()

  return <div className={cn('app', {}, [theme])}>
    <Navbar/>

    <button onClick={changeTheme}>Change theme</button>
    <AppRouter/>
  </div>
}