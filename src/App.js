import { AppState } from './context/app/AppState'
import Converter from './components/Converter'

const App = () => (
  <AppState>
    <Converter />
  </AppState>
)

export default App
