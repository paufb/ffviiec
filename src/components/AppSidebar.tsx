import { NavLink } from 'react-router-dom';
import MainIcon from '../assets/ui/main.png';
import WeaponsIcon from '../assets/ui/enhance.png';
import MateriaIcon from '../assets/ui/materia.png';
import styles from './AppSidebar.module.css';

interface AppSidebarProps {
  isCollapsed: boolean;
  collapseSidebar: Function;
}

export function AppSidebar({ isCollapsed, collapseSidebar }: AppSidebarProps) {
  function getNavLinkClasses({ isActive }: { isActive: boolean }) {
    return `${styles['entry']}${isActive ? ` ${styles['active']}` : ''}`;
  }

  return (
    <nav className={`${styles['app-sidebar']}${isCollapsed ? ` ${styles['collapsed']}` : ''}`}>
      <ul>
        <li>
          <NavLink to={'/'} className={getNavLinkClasses} onClick={() => collapseSidebar()}>
            <div className={styles['content']}>
              <img src={MainIcon} />
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/weapons'} className={getNavLinkClasses} onClick={() => collapseSidebar()}>
            <div className={styles['content']}>
              <img src={WeaponsIcon} />
              Weapons
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/materia'} className={getNavLinkClasses} onClick={() => collapseSidebar()}>
            <div className={styles['content']}>
              <img src={MateriaIcon} />
              Materia
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
