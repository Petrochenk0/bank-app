'use client';
import { message } from 'antd';
import React, { ReactNode } from 'react';
import { createContext } from 'react';

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<any>(null);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [amountOfMoney, setAmountOfMoney] = React.useState<any>('');
  const [plusOfMoney, setPlusOfMoney] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [inputValueWithdraw, setInputValueWithdraw] = React.useState('');
  const [resultWithdraw, setResultWithdraw] = React.useState('');
  const [username, setUsername] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const changeInputValueWithdraw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueWithdraw(event.target.value);
  };

  const showInput = () => {
    console.log('Это живая кнопка');
    setShow(!show);
    console.log(amountOfMoney);
  };
  const addMoney = () => {
    setAmountOfMoney(inputValue);
    message.success('The money has been successfully replenished 💰');
    setInputValue('');
  };

  const changeValueInInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const transferOfMoney = () => {
    setResultWithdraw((amountOfMoney - parseInt(inputValueWithdraw)).toString());
    console.log(resultWithdraw);
    setAmountOfMoney((prevAmountOfMoney: any) =>
      (prevAmountOfMoney - parseInt(inputValueWithdraw)).toString(),
    );
    setInputValueWithdraw('');
    message.success('Successful transfer of loan to assets 🎉');
  };

  const updateUsername = (newUsername: string) => {
    console.log('Updating username:', newUsername);
    setUsername(newUsername);
    if (typeof window !== 'undefined') {
      localStorage.setItem('username', newUsername);
    }
  };

  const logout = () => {
    setUsername('');
    if (typeof window !== 'undefined') {
      localStorage.setItem('username', '');
    }
    message.success('User successfully logged out');
  };

  return (
    <MyContext.Provider
      value={{
        amountOfMoney,
        setAmountOfMoney,
        plusOfMoney,
        setPlusOfMoney,
        inputValue,
        setInputValue,
        addMoney,
        changeValueInInput,
        setShow,
        showInput,
        show,
        inputValueWithdraw,
        changeInputValueWithdraw,
        transferOfMoney,
        username,
        updateUsername,
        logout,
      }}>
      {children}
    </MyContext.Provider>
  );
};
