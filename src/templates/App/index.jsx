import { AlbumProvider } from '../../contexts/AlbunsProvider'
import { Albuns } from '../../components/Albuns'
import './styles.css'
import { CounterProvider } from '../../contexts/CounterProvider'
import { CommentProvider } from '../../contexts/CommentsProvider'

function App() {

  return(
    <AlbumProvider>
      <CommentProvider>
        <CounterProvider>
          <Albuns/>
        </CounterProvider>
      </CommentProvider>
    </AlbumProvider>
  )
}

export default App
