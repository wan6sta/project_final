import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const {className} = props

  const {t, i18n} = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={cn(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  )
}