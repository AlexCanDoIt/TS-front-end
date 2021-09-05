import axios from 'axios';
import {
  getBikesRequest,
  getBikesSuccess,
  getBikesError,
  addBikeRequest,
  addBikeSuccess,
  addBikeError,
  deleteBikeRequest,
  deleteBikeSuccess,
  deleteBikeError,
  toggleStatusBikeRequest,
  toggleStatusBikeSuccess,
  toggleStatusBikeError,
} from './bikesSlice';

axios.defaults.baseURL = 'https://acdi-bikes.herokuapp.com/api/v1';

const getBikes = () => async dispatch => {
  dispatch(getBikesRequest());

  try {
    const response = await axios.get('/bikes');
    dispatch(getBikesSuccess(response.data.data));
  } catch (err) {
    dispatch(getBikesError(err.message));
  }
};

const addBike = credentials => async dispatch => {
  dispatch(addBikeRequest());

  try {
    const response = await axios.post('/bikes', credentials);
    dispatch(addBikeSuccess(response.data.data.result));
  } catch (err) {
    dispatch(addBikeError(err.message));
  }
};

const deleteBike = id => async dispatch => {
  dispatch(deleteBikeRequest());

  try {
    const response = await axios.delete(`/bikes/${id}`);
    dispatch(deleteBikeSuccess(response.data.data.result));
  } catch (err) {
    dispatch(deleteBikeError(err.message));
  }
};

const toggleStatusBike = (id, credentials) => async dispatch => {
  dispatch(toggleStatusBikeRequest());

  try {
    const response = await axios.patch(`/bikes/${id}/status`, credentials);
    dispatch(toggleStatusBikeSuccess(response.data.data.result));
  } catch (err) {
    dispatch(toggleStatusBikeError(err.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getBikes, addBike, deleteBike, toggleStatusBike };
