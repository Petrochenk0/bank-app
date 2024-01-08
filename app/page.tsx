'use client';
import React from 'react';
import { FilterContext } from '@/components/Context/FilterContext';
import Main from '../components/Main/Main';
import './global.css';
import Link from 'next/link';
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
      <Main />
    </FilterContext.Provider>
  );
}
