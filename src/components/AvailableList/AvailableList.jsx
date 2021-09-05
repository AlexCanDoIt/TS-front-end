/* Modules */
import { useSelector, useDispatch } from 'react-redux';
import bikesOperations from '../../redux/bikes/bikesOperations';
import bikesSelectors from '../../redux/bikes/bikesSelectors';

/* Components */
import Container from '../Container';
import AvailableBike from '../AvailableBike';

/* Styles */
import styles from './AvailableList.module.css';

export default function AvailableList() {
  const dispatch = useDispatch()
  const bikes = useSelector(bikesSelectors.getAvailableBikes);

  const onRent = async id => {
    await dispatch(bikesOperations.toggleStatusBike(id, {rented: true}))
    dispatch(bikesOperations.getBikes())
  }
  const onDelete = async id => {
    await dispatch(bikesOperations.deleteBike(id))
    dispatch(bikesOperations.getBikes())
  }

  return (
    <Container>
      <h2 className={styles.title}>🚲 Available Bicycles ({bikes.length})</h2>
      <ul className={styles.list}>
        {bikes.map(({_id, name, type, price}) => (
          <li key={_id} className={styles.item}>
            <AvailableBike 
              name={name}
              type={type.name}
              price={price}
              onRent={() => onRent(_id)}
              onDelete={() => onDelete(_id)}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
};