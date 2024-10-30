import WeaponsIcon from '../assets/ui/enhance.png';
import MateriaIcon from '../assets/ui/materia.png';
import pageAnimations from './page-animations.module.css';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div className={styles['background']} />
      <div className={styles['page']}>
        <div className={styles['container']}>
          <img className={`${styles['ffviiec-logo']} ${pageAnimations['fade-in-from-left']}`} src={new URL('../assets/ffviiec-logo.png', import.meta.url).href} />
          <div className={`${styles['description']} ${pageAnimations['fade-in-from-right']}`}>
            This site is not affiliated with or endorsed by SQUARE ENIX or Applibot, Inc.
            <br />
            All rights to the assets and content used belong to their respective owners.
            <br />
            © SQUARE ENIX Powered by Applibot, Inc.
          </div>
        </div>
        <div className={`${styles['anchors-container']} ${pageAnimations['fade-in-from-bottom']}`}>
          <div className={styles['anchor-container']}>
            <div className={styles['outer-shadow']} />
            <div className={styles['inner-shadow']} />
            <div className={styles['border']} />
            <NavLink to={'/weapons'} className={styles['anchor']}>
              <img src={WeaponsIcon} className={styles['weapons-img']} />
            </NavLink>
          </div>
          <div className={styles['anchor-container']}>
            <div className={styles['outer-shadow']} />
            <div className={styles['inner-shadow']} />
            <div className={styles['border']} />
            <NavLink to={'/materia'} className={styles['anchor']}>
              <img src={MateriaIcon} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
