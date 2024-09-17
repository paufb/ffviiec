import styles from './HamburgerMenuIcon.module.css';

interface HamburgerMenuIconProps {
  isSidebarCollapsed: boolean;
  onClick: Function;
}

export function HamburgerMenuIcon({ isSidebarCollapsed, onClick }: HamburgerMenuIconProps) {
  return (
    <div className={`${styles['hamburger-container']} ${isSidebarCollapsed ? '' : styles['active']}`} onClick={() => onClick()}>
      <div className={`${styles['line']} ${styles['line-top']}`} />
      <div className={`${styles['line']} ${styles['line-middle']}`} />
      <div className={`${styles['line']} ${styles['line-bottom']}`} />
    </div>
  );
}
