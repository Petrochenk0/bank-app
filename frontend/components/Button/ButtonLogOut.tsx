'use client';
import React from 'react';
import styles from './styles.module.sass';
import { MyContext } from '@/store/Context';
import { useRouter } from 'next/navigation';

export default function ButtonLogOut() {
  const { logout } = React.useContext(MyContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div onClick={handleLogout} className={styles.box_3}>
      <div className={`${styles.btn} ${styles.btn_three}`}>
        <span className={styles.text}>Log out</span>
      </div>
    </div>
  );
}
