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
    <nav className={`${styles['app-sidebar']}${isCollapsed ? ` ${styles['collapsed']}` : ''}`}>
      <ul>
        <li>
          <NavLink to={'/'} className={getNavLinkClasses}>
            <div className={styles['content']}>
              <img src={MainIcon} />
              <div className={styles['title']}>
                Home
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/weapons'} className={getNavLinkClasses}>
            <div className={styles['content']}>
              <img src={WeaponsIcon} />
              <div className={styles['title']}>
                Weapons
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
