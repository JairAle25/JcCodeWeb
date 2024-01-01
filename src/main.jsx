import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import Hero from './hero'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Hero></Hero>
  </React.StrictMode>,
)
