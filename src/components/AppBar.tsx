import { Link, NavLink } from 'react-router-dom';
import BusterSwordIcon from '/buster-sword.svg';
import GitHubIcon from '/github.svg';
import styles from './AppBar.module.css';

type AppBarProps = {
  isViewportNarrow: boolean;
}

export function AppBar({ isViewportNarrow }: AppBarProps) {
  function setActive({ isActive }: { isActive: boolean }) {
    return isActive ? styles['active'] : '';
  }

  return (
    <div className={styles['app-bar']}>
      <div className={styles['centered-container']}>
        <div className={styles['logo-nav']}>
          <img className={styles['buster-sword-logo']} src={BusterSwordIcon} />
          <nav>
            <ul>
              <li>
                <NavLink to={'/'} className={setActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/weapons'} className={setActive}>
                  Weapons
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {!isViewportNarrow && <Link className={styles['github-anchor']} to="https://github.com/PauFB/ffviiec-companion" target="_blank" rel="noreferrer">
          <img src={GitHubIcon} />
        </Link>}
      </div>
    </div>
  );
}
