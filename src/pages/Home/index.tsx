import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../constainers/BarraLateral'
import ListaDeTarefas from '../../constainers/listaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
