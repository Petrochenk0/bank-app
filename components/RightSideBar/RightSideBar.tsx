'use client';
import React from 'react';
import { Balance } from './Balance/Balance';
import { Boards } from './Boards/Boards';
import styles from './styles.module.sass';
import { MyContextProvider } from '../Context/Context';
export const RightSideBar = (): React.ReactNode => {
  return (
    <div className={styles.sidebar}>
      <MyContextProvider>
        <Balance />
        <Boards />
      </MyContextProvider>
    </div>
  );
};
// Нужно создавать хранилище для того чтобы передавать ценики для передачи их в boards чтобы потом блядь их менять как то в контексте сука пиздец блядь - пиздец идея? Да блядь
// Оно работает блядь 😎
