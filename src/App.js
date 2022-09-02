import { AppState } from './context/app/AppState'
import Main from './components/Main'

const App = () => (
  <AppState>
    <Main />
  </AppState>
)

export default App
