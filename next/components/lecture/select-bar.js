// SelectBar.js

import React from 'react';
import styles from '@/styles/lectures/lectures.module.css';

export default function SelectBar({ handleSelect }) {
  return (
    <div className={styles.selectBar}>
      <div className={styles.selectTitle}>精選講座</div>
      <div className={styles.selectBtns}>
        <button className={styles.selectBtn} onClick={() => handleSelect('')}>
          全部
        </button>
        <button
          className={styles.selectBtn}
          value='中南美洲'
          onClick={() => handleSelect('中南美洲')}
        >
          中南美洲
        </button>
        <button
          className={styles.selectBtn}
          value='歐洲'
          onClick={() => handleSelect('歐洲')}
        >
          歐洲
        </button>
        <button
          className={styles.selectBtn}
          value='日本'
          onClick={() => handleSelect('日本')}
        >
          日本
        </button>
      </div>
    </div>
  );
}
