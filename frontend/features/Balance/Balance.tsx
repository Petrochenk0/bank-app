import React from 'react';
import styles from '../../widgets/RightSideBar/styles.module.sass';
import { MyContext } from '@/store/Context';
import { message } from 'antd';
import axios from 'axios';
export const Balance = (): React.ReactNode => {
  const {
    username,
    balance,
    amountOfMoney,
    setAmountOfMoney,
    plusOfMoney,
    setPlusOfMoney,
    inputValue,
    setInputValue,
    changeValueInInput,
    fetchBalanceAndHistory,
    updateBalance,
  } = React.useContext(MyContext);

  const addMoney = async () => {
    try {
      await updateBalance(inputValue, 'deposit');
      message.success('The money has been successfully replenished 💰');

      await fetchBalanceAndHistory();

      console.log('Updated amount:', amountOfMoney);

      setInputValue('');
      setPlusOfMoney(false);
    } catch (error) {
      console.error('Add money error', error);
      message.error('Error adding money, please try again.');
    }
  };

  React.useEffect(() => {
    fetchBalanceAndHistory();
  }, [amountOfMoney]);

  return (
    <div>
      <div className={styles.display__flex}>
        <div className={styles.balance}>My Balance: {amountOfMoney} $</div>
        <button onClick={() => setPlusOfMoney(!plusOfMoney)} className={styles.button__add}>
          <h3>+</h3>
        </button>
      </div>
      <div className={styles.input__money} style={{ marginTop: '20px', marginBottom: '20px' }}>
        {plusOfMoney ? (
          <div>
            <h4 style={{ marginBottom: '20px' }}>How much do you want to top up?</h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label className={styles.inp}>
                <input
                  value={inputValue}
                  onChange={changeValueInInput}
                  type="text"
                  className={styles.inp}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>For the amount of</span>
                <span className={styles.focus__bg}></span>
              </label>
            </div>
            <div className={styles.wrapper} onClick={addMoney}>
              <div className={styles.link_wrapper}>
                <a className={styles.link__a}>Continue</a>
                <div className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
