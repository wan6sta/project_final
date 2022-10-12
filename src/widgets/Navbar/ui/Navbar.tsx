import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {className} = props

  return <div className={cn(cls.Navbar, {}, [className])}>
    <div>

    </div>
    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.WHITE}
        to={'/'}
      >
        MAIN
      </AppLink>

      <AppLink
        theme={AppLinkTheme.WHITE}
        to={'/about'}
      >
        ABOUT
      </AppLink>
    </div>
  </div>
}




