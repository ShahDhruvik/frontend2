import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Aap'
import { DarkProvider } from './context/darkContext'
import '@/styles/global.css'
import AppThemeProvider from './context/themeContext'
import { AuthProvider } from './context/authContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DarkProvider>
          <AppThemeProvider>
            <App />
          </AppThemeProvider>
        </DarkProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
