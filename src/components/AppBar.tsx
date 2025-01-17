import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import styles from './AppBar.module.css';

type AppBarProps = {
  isSidebarCollapsed: boolean;
  toggleSidebar: Function;
}

export function AppBar({ isSidebarCollapsed, toggleSidebar }: AppBarProps) {
  return (
    <div className={styles['bar']}>
      <div className={styles['container']}>
        <HamburgerMenuIcon isSidebarCollapsed={isSidebarCollapsed} onClick={toggleSidebar} />
      </div>
    </div>
  );
}
