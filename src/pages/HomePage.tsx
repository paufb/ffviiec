import pageAnimations from './page-animations.module.css';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

export function Home({ collapseSidebar }: { collapseSidebar: Function }) {
  const routeIcons = {
    '/weapons': new URL('../assets/ui/enhance.png', import.meta.url).href,
    '/materia': new URL('../assets/ui/materia.png', import.meta.url).href
  };

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
          {Object.entries(routeIcons).map(([route, iconURL]) => (
            <div className={styles['anchor-container']} key={route}>
              <div className={styles['outer-shadow']} />
              <div className={styles['inner-shadow']} />
              <div className={styles['border']} />
              <NavLink to={route} className={styles['anchor']} onClick={() => collapseSidebar()}>
                <img
                  src={iconURL}
                  alt=""
                  className={route === '/weapons' ? styles['weapons-img'] : ''}
                />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
