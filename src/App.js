/* Modules */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/* Components */
import bikesOperations from './redux/bikes/bikesOperations';
import CreateNewRentForm from './components/CreateNewRentForm';
import RentedList from './components/RentedList';
import AvailableList from './components/AvailableList';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bikesOperations.getBikes());
  }, [dispatch]);

  return (
    <>
      <h1 className="title head-title">Awesome Bike Rental</h1>
      <CreateNewRentForm />
      <RentedList />
      <AvailableList />
    </>
  );
}
