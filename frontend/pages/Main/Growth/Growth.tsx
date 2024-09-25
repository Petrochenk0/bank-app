import React from 'react';
import Image from 'next/image';
import GrowthImage from './Growth.png';
import SellImage from './Sell.png';
import styles from './styles.module.sass';
export default function Growth() {
  return (
    <div className={styles.center}>
      <Image src={GrowthImage} alt="growth"></Image>
      <Image src={SellImage} alt="sell"></Image>
    </div>
  );
}
