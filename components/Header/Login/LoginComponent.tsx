import React from 'react';
import styles from './styles.module.sass';
export const LoginComponent = (): React.ReactNode => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.demo__flex__spacer}></div>
        <h1 className={styles.greeting}>Welcome to our bank</h1>
        <div className={styles.webflow__style__input}>
          <input className={styles.input} type="text" placeholder="Login: "></input>
          <button className={styles.button} type="submit">
            <i className="icon ion__android__arrow__forward"></i>
          </button>
        </div>
        <div className={styles.webflow__style__input}>
          <input className={styles.input} type="text" placeholder="Password: "></input>
          <button className={styles.button} type="submit">
            <i className="icon ion__android__arrow__forward"></i>
          </button>
        </div>
        <div className={styles.demo__flex__spacer}></div>
      </div>
    </div>
  );
};
