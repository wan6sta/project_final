import 'app/styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {cn} from 'shared/lib/classNames/cn'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar';

export const App = () => {
  const {theme} = useTheme()

  return <div className={cn('app', {}, [theme])}>
    <Navbar/>
    <div className='content-page'>
      <Sidebar/>
      <AppRouter/>
    </div>
  </div>
}