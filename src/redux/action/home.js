import {showMessage} from '../../utils';

const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getFoodData = () => (dispatch) => {
  Axios.get(`${API_HOST.url}/food`)
    .then((res) => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch((err) => {
      showMessage(
        `${err?.response?.data?.message} on Food API` ||
          'Terjadi kesalahan di API Food',
      );
    });
};

