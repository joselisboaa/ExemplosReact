import { useContext } from "react";
import { useEffect } from "react"
import { loadAlbuns } from "../../contexts/AlbunsProvider/actions";
import { AlbunsContext } from "../../contexts/AlbunsProvider/context";
import { loadComments } from "../../contexts/CommentsProvider/actions";
import { CommentsContext } from "../../contexts/CommentsProvider/context";
import { decrementCounter, incrementCounter } from "../../contexts/CounterProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";


export const Albuns = () => {

  const albunsContext = useContext(AlbunsContext);
  const {albumState, albumDispatch} = albunsContext;

  const counterContext = useContext(CounterContext);
  const {counterState, counterDispatch} = counterContext;

  const commentContext = useContext(CommentsContext);
  const {commentState, commentDispatch} = commentContext;

  useEffect(() => {
    loadAlbuns(albumDispatch);
  }, [albumDispatch]);
  
  useEffect(() => {
    loadComments(commentDispatch);
  }, [commentDispatch])

  return (
    <div className="App">
      <h1>Counter: {counterState.counter}</h1>
      <button onClick={() => incrementCounter(counterDispatch)}>Incrementar</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Decrementar</button>
      <ul>
        {commentState.comments.map(comment => (
          <li>{comment.email}</li>
        ))}
        {albumState.albuns.map(album => (
        <li>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}