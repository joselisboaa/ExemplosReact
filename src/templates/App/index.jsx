import { AlbumProvider } from '../../contexts/AlbunsProvider'
import { Albuns } from '../../components/Albuns'
import './styles.css'

function App() {

  return(
    <AlbumProvider>
      <Albuns/>
    </AlbumProvider>
  )
}

export default App
