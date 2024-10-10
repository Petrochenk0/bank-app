'use client';
import { message } from 'antd';
import React, { ReactNode } from 'react';
import { createContext } from 'react';
import axios from 'axios';

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
  const [balance, setBalance] = React.useState(0);
  const [transactionHistory, setTransactionHistory] = React.useState([]);

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

  const fetchBalanceAndHistory = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/balance/${username}`, {
        method: 'GET',
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`Error fetching balance and history: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Fetched data:', data);

      setAmountOfMoney(data.balance);
      setTransactionHistory((prevHistory) => {
        console.log('Previous history:', prevHistory);
        console.log('New history:', data.history);
        return data;
      });
    } catch (error) {
      console.error('fetchBalanceAndHistory Error:', error);
    }
  };

  const updateBalance = async (amount, type) => {
    try {
      const response = await fetch(`http://localhost:3001/api/balance/transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          type: type,
          username: username,
        }),
      });

      if (!response.ok) {
        message.error('error with update balance');
      }

      fetchBalanceAndHistory();
    } catch (error) {
      console.error('updateBalance: ', error);
    }
  };

  const transferOfMoney = async () => {
    try {
      if (parseInt(inputValueWithdraw) > amountOfMoney) {
        message.error('Not enough money ебать 😤');
        return;
      }

      const response = await fetch('http://localhost:3001/api/balance/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: inputValueWithdraw,
          type: 'withdraw',
          username: username,
        }),
      });

      if (!response.ok) {
        message.error('Error with withdraw 💀');
      }

      fetchBalanceAndHistory();

      setInputValueWithdraw('');
      message.success('Withdrawal successful 🎉');
    } catch (error) {
      message.error('Error withdrawing money, please try again 😵‍💫');
      console.error('error withdraw', error);
    }
  };

  const fetchTransactionHistory = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/balance/history/${username}`);
      if (!response.ok) {
        message.error('Error with history transaction');
        return;
      }
      const data = await response.json();
      setTransactionHistory(data.history);
    } catch (error) {
      console.error('fetchTransactionHistory', error);
    }
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
        balance,
        transactionHistory,
        updateBalance,
        setTransactionHistory,
        fetchBalanceAndHistory,
        fetchTransactionHistory,
      }}>
      {children}
    </MyContext.Provider>
  );
};
