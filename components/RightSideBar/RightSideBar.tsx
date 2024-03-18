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
