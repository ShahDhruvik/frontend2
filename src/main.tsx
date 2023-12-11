import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkProvider } from './context/darkContext'
import '@/styles/global.css'
import AppThemeProvider from './context/themeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </DarkProvider>
  </React.StrictMode>,
)
