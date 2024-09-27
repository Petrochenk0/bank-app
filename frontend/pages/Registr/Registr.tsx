'use client';
import React from 'react';

import Link from 'next/link';

import { message } from 'antd';

import styles from './styles.module.sass';

function Registr() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setReapetPassword] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      message.error("The passwords don't match");
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST', // Указываем метод запроса
        headers: {
          'Content-Type': 'application/json', // Указываем, что отправляем данные в формате JSON
        },
        body: JSON.stringify({ username, password }), // Преобразуем данные в строку JSON
      });
      if (response.ok) {
        message.success('Registration was successful! Congratulations!');
      } else {
        message.error('Registration error. try again!');
      }
    } catch (error) {
      console.log('Error with server ', error);
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
          <h3 className={styles.h3}>Registr Here</h3>
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
          <label className={styles.label} htmlFor="repeat password">
            Reapet Password
          </label>
          <input
            value={repeatPassword}
            onChange={(e) => setReapetPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder=" Reapet Password"
            id="password"
          />
          <button className={styles.button} type="submit">
            Registr
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registr;
