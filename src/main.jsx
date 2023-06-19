import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/antd/dist/reset.css'
import Providers from './providers.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <Router>
        <App />
      </Router>
    </Providers>
  </React.StrictMode>
)
