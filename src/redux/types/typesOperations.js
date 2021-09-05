import axios from 'axios';
import {
  getTypesRequest,
  getTypesSuccess,
  getTypesError,
} from './typesSlice';

axios.defaults.baseURL = 'https://acdi-bikes.herokuapp.com/api/v1';

const getTypes = () => async dispatch => {
  dispatch(getTypesRequest());

  try {
    const response = await axios.get('/types');
    dispatch(getTypesSuccess(response.data.data.result));
  } catch (error) {
    dispatch(getTypesError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTypes };
