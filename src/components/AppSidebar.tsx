import { NavLink } from 'react-router-dom';
import MainIcon from '../assets/ui/main.png';
import WeaponsIcon from '../assets/ui/enhance.png';
import styles from './AppSidebar.module.css';

interface SidebarProps {
  isCollapsed: boolean;
  isViewportNarrow: boolean;
}

export function AppSidebar({ isCollapsed, isViewportNarrow }: SidebarProps) {
  function getNavLinkClasses({ isActive }: { isActive: boolean }) {
    return `${styles['entry']}${isActive ? ` ${styles['active']}` : ''}`;
  }

  return (
    <nav className={`${styles['sidebar']}${isCollapsed ? ` ${styles['collapsed']}` : ''}`}>
      <NavLink to={'/'} className={getNavLinkClasses}>
        <img src={MainIcon} />
        Home
      </NavLink>
      <NavLink to={'/weapons'} className={getNavLinkClasses}>
        <img src={WeaponsIcon} />
        Weapons
      </NavLink>
    </nav>
  );
}
