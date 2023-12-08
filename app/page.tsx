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
// Таска!
// 1) Отправить 4 файла на рефакторинг и тесты
// 2) Если ничего не получится то почему я должен застревать на этой задаче? Вот именно, двигаюсь вперёд дальше
// Нужно давать мини задачи после каждого окончания, и давать не такие сложные которые могут продлится хотя бы 2 минуты
