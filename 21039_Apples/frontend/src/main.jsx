import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './components/header/header.jsx'
import {Footer} from './components/footer/footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
