'use client';
import React from 'react';
import { FilterContext } from '@/store/FilterContext';
import Main from '../pages/Main/Main';
import './global.css';
import Link from 'next/link';
import Header from '@/widgets/Header/Header';
import LeftSideBar from '@/widgets/LeftSideBar/LeftSideBar';
import { RightSideBar } from '@/widgets/RightSideBar/RightSideBar';
import { Provider } from 'react-redux';
import { MyContextProvider } from '@/store/Context';

export default function Home() {
  const { valueInInput, setValueInInput } = React.useContext(FilterContext);
  const filterCrypto = (cryptoCurrency: string) => {
    return cryptoCurrency.toLowerCase().includes(valueInInput.toLowerCase());
  };
  return (
    <MyContextProvider>
      <Header />
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </MyContextProvider>
  );
}
