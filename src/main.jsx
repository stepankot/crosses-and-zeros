import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReduxRenderer } from './redux-manager.js'
import { store } from './store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ReduxRenderer store={store}>
    <App />
  </ReduxRenderer>,
)
