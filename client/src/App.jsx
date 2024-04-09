import { useState } from 'react'
import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';  


function App() {
  return (

    <div>
      <Header />
      <main className="">
        <div><Outlet /></div>
        
        </main>
    </div>
      
    
  )
}

export default App
