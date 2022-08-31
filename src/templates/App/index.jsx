import { AlbumProvider } from '../../contexts/AlbunsProvider'
import { Albuns } from '../../components/Albuns'
import { CounterProvider } from '../../contexts/CounterProvider'
import { CommentProvider } from '../../contexts/CommentsProvider'
import './styles.css'
import { Comments } from '../../components/Comments'
import { Counter } from '../../components/Counter'

function App() {

  return(
    <AlbumProvider>
      <CommentProvider>
        <CounterProvider>
          <Counter/>
          <Comments/>
          <Albuns/>
        </CounterProvider>
      </CommentProvider>
    </AlbumProvider>
  )
}

export default App
