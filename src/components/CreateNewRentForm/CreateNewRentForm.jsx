/* Modules */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import bikesOperations from '../../redux/bikes/bikesOperations';
import typesOperations from '../../redux/types/typesOperations';
import typesSelectors from '../../redux/types/typesSelectors';

/* Components */
import Container from '../Container';

/* Styles */
import styles from './CreateNewRentForm.module.css';

export default function CreateNewRentForm () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(typesOperations.getTypes());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    type: Yup.string().required(),
    price: Yup.number().required().min(0.01),
  });

  const validation = obj => {
    validationSchema.validate(obj).catch(function (err) {
      alert(err.name + ': ' + err.errors);
    });
  };

  const initialValue = {
    name: '',
    type: '61323910c5eaa92c2c170032',
    price: '',
  };

  const types = useSelector(typesSelectors.getTypes);

  const getOptions = items => {
    let optionList = [];
    items.forEach(({ _id, name }) => {
      optionList.push(<option key={_id} value={_id}>{name}</option>);
    });
    return optionList;
  }

  const handleSubmit = async (values, {resetForm}) => {
    await dispatch(bikesOperations.addBike(values));
    dispatch(bikesOperations.getBikes());
    resetForm({});
  };

  return (
    <Container>
      <h2 className={'title ' + styles.title}>🤑 Create New Rent</h2>

      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form className={styles.container}>
            <Field
              className={styles.input + ' ' + styles.nameInput}
              name="name"
              type="text"
              placeholder="Enter the bike name"
            />

            <Field
              className={styles.input + ' ' + styles.typeInput}
              as="select"
              name="type"
              placeholder="Enter the bike type"
            >
              {getOptions(types)}
            </Field>
            
            <Field
              className={styles.input + ' ' + styles.priceInput}
              name="price"
              type="number"
              step={0.1}
              placeholder="Enter the bike price"
            />

            <button
              className={'button ' + styles.submitButton}
              type="submit"
              onClick={() => validation(values)}
            >
              Submit Rent
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  )
};