import { useState, useEffect } from 'react';
import msToTime from '../../utils/msToTime'
import styles from './RentedBike.module.css';

export default function RentedBike ({ name, type, price, rentalTimeStamp, onCancel }) {
  const [time, setTime] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const rentalTime = Date.now() - rentalTimeStamp;
      const discountTime = 30 * 1000;
      let rentalSum = 0;

      if (rentalTime > discountTime) {
        rentalSum = (rentalTime / 60 / 60 / 1000 * price / 2) + (discountTime  / 1000 / 60 / 60 * price / 2);
      } else {
        rentalSum = rentalTime / 60 / 60 / 1000 * price;
      }

      setTime(rentalTime);
      setSum(rentalSum.toFixed(2));
    }, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, [])

  return (
    <>
      <span className={styles.text}>{name}</span>
      <span className={styles.text}>{type}</span>
      <span className={styles.text}>${price}</span>
      <span className={styles.text}>{msToTime(time)}</span>
      <span className={styles.text}>${sum}</span>
      <button className={'button ' + styles.cancelButton} type="button" onClick={onCancel}>Cancel Rent</button>
    </>
  )
};