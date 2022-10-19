import { FC, PropsWithChildren } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WHITE = 'white'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={cn(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}

