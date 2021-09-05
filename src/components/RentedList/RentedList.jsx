/* Modules */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import bikesOperations from '../../redux/bikes/bikesOperations';
import bikesSelectors from '../../redux/bikes/bikesSelectors';

/* Components */
import Container from '../Container';
import RentedBike from '../RentedBike';

/* Styles */
import styles from './RentedList.module.css';

export default function RentedList() {
  const [total, setTotal] = useState(0);
  
  const dispatch = useDispatch();
  const bikes = useSelector(bikesSelectors.getRentedBikes);

  useEffect(() => {
    const timerId = setInterval(() => {
      const sum = bikes.reduce((acc, item) => {
        const rentalTime = Date.now() - item.rentalTimeStamp;
        const discountTime = 30 * 1000;
        let rentalSum = 0;
    
        if (rentalTime > discountTime) {
          rentalSum = (rentalTime / 60 / 60 / 1000 * item.price / 2) + (discountTime  / 1000 / 60 / 60 * item.price / 2);
        } else {
          rentalSum = rentalTime / 60 / 60 / 1000 * item.price;
        }

        return acc + rentalSum;
      }, 0)

      setTotal(sum);
    }, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, [bikes])

  const onCancel = async id => {
    await dispatch(bikesOperations.toggleStatusBike(id, {rented: false}))
    dispatch(bikesOperations.getBikes())
  }

  return (
    <Container>
      <h2 className={'title ' + styles.title}>🤩 Your Rent (Total: ${total.toFixed(2)})</h2>
      <ul className={styles.list}>
        {bikes.map(({_id, name, type, price, rentalTimeStamp}) => (
          <li key={_id} className={styles.item}>
            <RentedBike
              name={name}
              type={type.name}
              price={price}
              rentalTimeStamp={rentalTimeStamp}
              onCancel={() => onCancel(_id)}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
};