import React from 'react';
import styles from './styles.module.sass';
import Link from 'next/link';

export default function ButtonHome() {
  return (
    <Link href="/" className={styles.arrow}>
      <button className={styles.go_home}>{'<'} Go to the home page</button>
    </Link>
  );
}
