const getBikes = state => state.bikes.list;
const getRentedBikes = state => state.bikes.list.filter(bike => bike.rented);
const getAvailableBikes = state =>
  state.bikes.list.filter(bike => !bike.rented);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBikes,
  getRentedBikes,
  getAvailableBikes,
};
