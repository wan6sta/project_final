import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {className} = props

  const {t} = useTranslation()

  return <div className={cn(cls.Navbar, {}, [className])}>
    <div>

    </div>

    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.WHITE}
        to={'/'}
      >
        {t('Главная')}
      </AppLink>

      <AppLink
        theme={AppLinkTheme.WHITE}
        to={'/about'}
      >
        {t('О сайте')}
      </AppLink>
    </div>
  </div>
}




