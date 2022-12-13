import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { Router } from './Router'
import './main.css'
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)