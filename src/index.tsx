import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'
import './styles/main.scss'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
