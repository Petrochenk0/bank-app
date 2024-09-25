import React from 'react';
import styles from './styles.module.sass';
import Link from 'next/link';
export const LoginComponent = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.arrow} ${styles.animatedText}`}>
        <div>
          <button className={styles.go_home}>{'<'} Go to the home page</button>
        </div>
      </Link>
      <div className={styles.background}>
        <form className={styles.form}>
          <h3 className={styles.h3}>Welcome to our bank</h3>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input className={styles.input} type="text" placeholder="Email or Phone" id="username" />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input className={styles.input} type="password" placeholder="Password" id="password" />
          <button className={styles.button}>Log in</button>
        </form>
        <div className={styles.demo__flex__spacer}>
          <div>
            <Link
              href="/registr"
              className={`${styles.block__registr_point} ${styles.animatedText}`}>
              Not registered yet? Then {`you're`} here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
