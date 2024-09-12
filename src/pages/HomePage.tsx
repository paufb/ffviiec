import BusterSwordIcon from '/buster-sword.svg';
import { ATBBarCost } from '../components/ATBBarCost';
import styles from './HomePage.module.css';

export function Home() {
  return (
    <div className={styles['title-container']}>
      <img src={BusterSwordIcon} />
      <div className={styles['title-column']}>
        <span className={styles['title']}>
          FFVIIEC
          <br />
          Companion
        </span>
        <ATBBarCost cost={5} />
      </div>
    </div>
  );
}
