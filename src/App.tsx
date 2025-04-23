import EstiloGlobal, { Container } from './styles'
import BarraLateral from './constainers/BarraLateral'
import ListaDeTarefas from './constainers/listaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
