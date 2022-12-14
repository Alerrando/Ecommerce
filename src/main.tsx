import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router'
import CreateContextProvider from './context/shopContext';
import './main.css'
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CreateContextProvider>
      <Router />
    </CreateContextProvider>
  </React.StrictMode>
)