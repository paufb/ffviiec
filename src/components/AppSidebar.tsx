import { NavLink } from 'react-router-dom';
import MainIcon from '../assets/ui/main.png';
import WeaponsIcon from '../assets/ui/enhance.png';
import WearBattle from '../assets/ui/wear_battle.png';
import MateriaIcon from '../assets/ui/materia.png';
import styles from './AppSidebar.module.css';

interface AppSidebarProps {
  isCollapsed: boolean;
  collapseSidebar: Function;
}

export function AppSidebar({ isCollapsed, collapseSidebar }: AppSidebarProps) {
  const routes = [
    { path: '/', name: 'Home', imgSrc: MainIcon },
    { path: '/weapons', name: 'Weapons', imgSrc: WeaponsIcon },
    { path: '/gear', name: 'Gear', imgSrc: WearBattle },
    { path: '/materia', name: 'Materia', imgSrc: MateriaIcon }
  ];

  function getNavLinkClasses({ isActive }: { isActive: boolean }) {
    return `${styles['entry']}${isActive ? ` ${styles['active']}` : ''}`;
  }

  return (
    <nav className={`${styles['app-sidebar']}${isCollapsed ? ` ${styles['collapsed']}` : ''}`}>
      <ul>
        {routes.map((route) => (
          <NavLink to={route.path} className={getNavLinkClasses} onClick={() => collapseSidebar()} key={route.path}>
            <div className={styles['content']}>
              <img src={route.imgSrc} />
              {route.name}
            </div>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
