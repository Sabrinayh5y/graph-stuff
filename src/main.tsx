import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"

import './styles/normalize.css'

import App from './App'

createRoot(document.getElementById('app') as Element).render(
    <HashRouter>
        <App />
    </HashRouter>
)
