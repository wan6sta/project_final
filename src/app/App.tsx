import {Link} from 'react-router-dom'
import 'app/styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {cn} from 'shared/lib/classNames/cn'
import {AppRouter} from 'app/providers/router';

export const App = () => {
  const {theme, changeTheme} = useTheme()

  return <div className={cn('app', {}, [theme])}>
    <Link to={'/'}>MAIN</Link>
    <Link to={'/about'}>ABOUT</Link>

    <button onClick={changeTheme}>Change theme</button>
    <AppRouter/>
  </div>
}