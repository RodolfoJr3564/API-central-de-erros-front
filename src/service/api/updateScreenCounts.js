import APIRouts from './APIRouts';
import fetchApi from './fetchApi';
import { actionType } from '../context';
import { localStorageP } from '../../utils';

const defaultLevels = ['error', 'warning', 'info'];

const body = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default function updateScreenCounts(dispatch, levels = defaultLevels) {
  const { access_token: token } = localStorageP.getStorage('token');

  const promiseByLevel = levels
    .map((level) => fetchApi.get(APIRouts.EVENTS_LEVEL_COUNT_QUANTITY(level), body(token))
      .then(({ data }) => ({ [level]: data })));

  Promise.allSettled(promiseByLevel)
    .then((responses) => {
      responses.forEach(({ status, value }) => {
        if (status === 'fulfilled') {
          dispatch({ type: actionType.REQUEST_LEVEL_COUNT, payload: value });
        }
      });
    });
}
