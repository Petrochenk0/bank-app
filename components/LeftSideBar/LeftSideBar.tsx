import Link from 'next/link';
import Banner from './../../public/Banner.png';
import styles from './styles.module.sass';
import Image from 'next/image';
const LeftSideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.text__center}>MENU</li>
        <li>
          <Link className={styles.link} href="/">
            <div className={styles.more__size}>Dashboard</div>
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/asset">
            <div className={styles.more__size}>My Asset</div>
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/analytics">
            <div className={styles.more__size}>Analytics</div>
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/history">
            <div className={styles.more__size}> History</div>
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/news">
            <div className={styles.more__size}> News</div>
          </Link>
        </li>
      </ul>
      <Image src={Banner} alt="Banner" style={{ marginTop: '50px' }} />
    </div>
  );
};
export default LeftSideBar;
