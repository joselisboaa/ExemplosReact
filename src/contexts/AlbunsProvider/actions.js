import * as types from './types';
import { data } from './data';

export const loadAlbuns = async (dispatch) => {
  const albunsResponse = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albunsJSON = await albunsResponse.json();

  dispatch({ type: types.ALBUNS_TYPES.ALBUNS_SUCCESS, payload: albunsJSON });
}