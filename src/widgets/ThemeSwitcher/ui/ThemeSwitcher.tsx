import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/sun.png'
import DarkIcon from 'shared/assets/icons/moon.png'
import { Button } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const { className } = props

	const { theme, changeTheme } = useTheme()

	return (
		<Button
			className={cn(cls.ThemeSwitcher, {}, [className])}
			onClick={changeTheme}
		>
			<img src={theme === Theme.LIGHT ? LightIcon : DarkIcon}/>
		</Button>
	)
}

