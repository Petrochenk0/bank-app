'use client';
import React from 'react';
import { ReactNode } from 'react';
export interface IFilterContext {
  filterCrypto: (crypto: string) => boolean;
  valueInInput: string;
  setValueInInput: React.Dispatch<React.SetStateAction<string>>; // описали интерфейс для функции
}

export const FilterContext = React.createContext<IFilterContext>({
  filterCrypto: () => true,
  valueInInput: '',
  setValueInInput: () => {},
});
// Нам нужно создать FilterContextProvider 😎 изи
export const FilterContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [valueInInput, setValueInInput] = React.useState('');

  const filterCrypto = (cryptoCurrency: string) => {
    return cryptoCurrency.toLowerCase().includes(valueInInput.toLowerCase());
  };
  return (
    <FilterContext.Provider value={{ filterCrypto, valueInInput, setValueInInput }}>
      {children}
    </FilterContext.Provider>
  );
};
