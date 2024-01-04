import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app'
import '@/styles/global.css'
import '@/styles/spinner.css'
import AppThemeProvider from './context/themeContext'
import { AuthProvider } from './context/authContext'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './context/lodaingContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppThemeProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </AppThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
