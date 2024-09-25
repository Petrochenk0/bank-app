import React from 'react';

import styles from './styles.module.sass';
import Link from 'next/link';

function Registr() {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.arrow} ${styles.animatedText}`}>
        <div>
          <button className={styles.go_home}>{'<'} Go to the home page</button>
        </div>
      </Link>
      <div className={styles.background}>
        <form className={styles.form}>
          <h3 className={styles.h3}>Registr Here</h3>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input className={styles.input} type="text" placeholder="Email or Phone" id="username" />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input className={styles.input} type="password" placeholder="Password" id="password" />
          <label className={styles.label} htmlFor="repeat password">
            Reapet Password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder=" Reapet Password"
            id="password"
          />
          <button className={styles.button}>Registr</button>
        </form>
      </div>
    </div>
  );
}

export default Registr;
