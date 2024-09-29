'use client';
import React from 'react';
import { Balance } from '@/features/Balance/Balance';
import { Boards } from '@/entities/Boards/Boards';
import styles from './styles.module.sass';
import { Provider } from 'react-redux';

import { MyContextProvider } from '@/store/Context';

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
