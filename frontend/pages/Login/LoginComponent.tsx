'use client';
import React from 'react';
import styles from './styles.module.sass';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MyContext } from '@/store/Context';
import { message } from 'antd';

export const LoginComponent = (): React.ReactNode => {
  const context = React.useContext(MyContext);

  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider');
  }

  const { updateUsername } = context;

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Attempting login with:', username, password);
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        updateUsername(data.username);
        router.push('/');
        message.success('Успешная авторизация!');
        console.log(data);
      } else {
        console.log('Authorisation error');
        message.error('Incorrect login or password. Try again!');
      }
    } catch (error) {
      console.log('Error when connecting to the server', error);
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.arrow} ${styles.animatedText}`}>
        <div>
          <button className={styles.go_home}>{'<'} Go to the home page</button>
        </div>
      </Link>
      <div className={styles.background}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.h3}>Welcome to our bank</h3>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Email or Phone"
            id="username"
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
          />
          <button className={styles.button} type="submit">
            Log in
          </button>
        </form>
        <div className={styles.demo__flex__spacer}>
          <div>
            <Link
              href="/register"
              className={`${styles.block__registr_point} ${styles.animatedText}`}>
              Not registered yet? Then {`you're`} here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
