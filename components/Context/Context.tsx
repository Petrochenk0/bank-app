import React from 'react';
import { createContext } from 'react';

export const MyContext = createContext<any>(null);

export const MyContextProvider: React.FC = ({ children }: any) => {
  const [amountOfMoney, setAmountOfMoney] = React.useState('');
  const [plusOfMoney, setPlusOfMoney] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  // Нужно теперь добавить функцию которая будет списывать деньги при выводе
  const [show, setShow] = React.useState(false);
  const [inputValueWithdraw, setInputValueWithdraw] = React.useState('');
  const [resultWithdraw, setResultWithdraw] = React.useState('');
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
    setInputValue('');
  };

  const changeValueInInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const transferOfMoney = () => {
    setResultWithdraw((amountOfMoney - parseInt(inputValueWithdraw)).toString());
    console.log(resultWithdraw); // каким то образом это значение становиться минусовым
    setAmountOfMoney((prevAmountOfMoney: any) =>
      (prevAmountOfMoney - parseInt(inputValueWithdraw)).toString(),
    );
    setInputValueWithdraw('');
    console.log('success 🎉');
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
      }}>
      {children}
    </MyContext.Provider>
  );
};
