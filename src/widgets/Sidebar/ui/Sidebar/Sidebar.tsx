import {FC, useState} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={cn(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}

