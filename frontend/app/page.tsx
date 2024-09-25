'use client';
import React from 'react';
import { FilterContext } from '@/components/Context/FilterContext';
import Main from '../pages/Main/Main';
import './global.css';
import Link from 'next/link';
import Header from '@/widgets/Header/Header';
import LeftSideBar from '@/widgets/LeftSideBar/LeftSideBar';
import { RightSideBar } from '@/widgets/RightSideBar/RightSideBar';

export default function Home() {
  const { valueInInput, setValueInInput } = React.useContext(FilterContext);
  const filterCrypto = (cryptoCurrency: string) => {
    return cryptoCurrency.toLowerCase().includes(valueInInput.toLowerCase());
  };
  return (
    <FilterContext.Provider
      value={{
        filterCrypto: filterCrypto,
        valueInInput: valueInInput,
        setValueInInput: setValueInInput,
      }}>
      <Header />
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </FilterContext.Provider>
  );
}
