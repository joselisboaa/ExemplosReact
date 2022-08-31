import { ALBUNS_TYPES } from "./types";
import { data } from "./data";

export const albunsReducer = (state, action) => {

  switch(action.type) {
    case ALBUNS_TYPES.ALBUNS_LOADING: {
      console.log('carregando...');
      return {...state};
    }
    case ALBUNS_TYPES.ALBUNS_REJECTED: {
      console.log('um erro ocorreu');
      return {...state};
    }
    case ALBUNS_TYPES.ALBUNS_SUCCESS: {
      console.log('sucesso');
      return {...state, albuns: action.payload};
    }
  }

  return {...state};
}