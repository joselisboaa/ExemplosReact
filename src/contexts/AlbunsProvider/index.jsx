import { useReducer } from 'react';
import { AlbunsContext } from './context';
import { data } from './data';
import { albunsReducer } from './reducer';

export const AlbumProvider = ({ children }) => {

  const [albumState, albumDispatch] = useReducer(albunsReducer, data);

  return(
    <AlbunsContext.Provider value={{ albumState, albumDispatch }}>
      {children}
    </AlbunsContext.Provider>
  )
}