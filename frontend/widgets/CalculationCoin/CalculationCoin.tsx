import React, { useState } from 'react';
import { MyContext } from '@/store/Context';

import { Select, Input, Button, message } from 'antd';

import styles from './styles.module.sass';

const { Option } = Select;

const CalcutaionCoin = () => {
  const { username, fetchTransactionHistory } = React.useContext(MyContext);

  const [currency, setCurrency] = useState('USD');
  const [cryptoType, setCryptoType] = useState('BTC');
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [fiatAmount, setFiatAmount] = useState(0);

  React.useEffect(() => {}, [cryptoAmount]);

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  const handleCryptoTypeChange = (value: string) => {
    setCryptoType(value);
  };

  const handleFiatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiatAmount(Number(e.target.value));
    const rateBTC = 62177.122;
    setCryptoAmount(Number(e.target.value) / rateBTC);
  };

  return (
    <div className={styles.cryptoWidget}>
      <div className={styles.block__justify_between}>
        <div className={styles.choiceWithCoins}>Calculation</div>
        <Select value={currency} onChange={handleCurrencyChange}>
          <Option value="USD">USD</Option>
        </Select>
      </div>
      <Select className={styles.select__coin} value={cryptoType} onChange={handleCryptoTypeChange}>
        <Option value="BTC">Bitcoin / BTC</Option>
      </Select>
      <Input value={cryptoAmount.toFixed(8)} className={styles.inputField} />
      <Input
        value={fiatAmount}
        onChange={handleFiatChange}
        placeholder="USD"
        className={styles.inputFieldChange}
      />
    </div>
  );
};

export default CalcutaionCoin;
