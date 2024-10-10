'use client';
import React from 'react';

import { MyContext } from '@/store/Context';

import ButtonHome from '@/components/ButtonHome/ButtonHome';

import { message } from 'antd';

import Link from 'next/link';

import styles from './styles,.module.sass';
export default function HistoryOfOperations() {
  const {
    username,
    transactionHistory = [],
    setTransactionHistory,
    fetchTransactionHistory,
  } = React.useContext(MyContext) || {};

  const fetchBalanceAndHistory = React.useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/balance/${username}`, {
        method: 'GET',
      });

      if (!response.ok) {
        message.success(`Error fetching balance and history: ${response.statusText}`);
      }

      const data = await response.json();

      setTransactionHistory(data.history);
      console.log(data.history);
    } catch (error) {
      console.error('fetchBalanceAndHistory Error:', error);
    }
  }, [username]);

  React.useEffect(() => {
    fetchBalanceAndHistory();
  }, [fetchTransactionHistory]);

  return (
    <div className={styles.container}>
      <ButtonHome />

      <p className={styles.p}>
        History of <span className={styles.fancy}>Operations</span>
      </p>
      <ul className={styles.transactionList}>
        {transactionHistory.length > 0 ? (
          transactionHistory
            .slice()
            .reverse()
            .map((transaction, index) => (
              <li key={index} className={styles.transactionItem}>
                {transaction.type === 'deposit' ? (
                  <div className={styles.added}>Added: {transaction.amount}$ </div>
                ) : (
                  <div className={styles.withdrew}>Withdrew: {transaction.amount}$ </div>
                )}
              </li>
            ))
        ) : (
          <section className={styles.header}>
            <div className={styles.title_wrapper}>
              <h1 className={styles.swee_title}>
                <span data-text={styles.Sweet}>Not found</span>
                <span data-text={styles.Stuff}>Operations</span>
              </h1>
            </div>
          </section>
        )}
      </ul>
    </div>
  );
}
