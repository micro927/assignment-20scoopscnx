import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './components/GlobalStyles'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
