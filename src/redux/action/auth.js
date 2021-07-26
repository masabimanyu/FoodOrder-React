import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};
