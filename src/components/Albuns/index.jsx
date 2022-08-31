import { useContext } from "react";
import { useEffect } from "react"
import { loadAlbuns } from "../../contexts/AlbunsProvider/actions";
import { AlbunsContext } from "../../contexts/AlbunsProvider/context";


export const Albuns = () => {

  const albunsContext = useContext(AlbunsContext);
  const {albumState, albumDispatch} = albunsContext;

  useEffect(() => {
    loadAlbuns(albumDispatch);
  }, [albumDispatch]);

  return (
    <div className="App">
      <ul>
        {albumState.albuns.map(album => (
        <li>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}