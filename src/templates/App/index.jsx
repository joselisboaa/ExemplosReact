import { AlbumProvider } from '../../contexts/AlbunsProvider'
import { Albuns } from '../../components/Albuns'
import './styles.css'
import { CounterProvider } from '../../contexts/CounterProvider'

function App() {

  return(
    <AlbumProvider>
      <CounterProvider>
        <Albuns/>
      </CounterProvider>
    </AlbumProvider>
  )
}

export default App
