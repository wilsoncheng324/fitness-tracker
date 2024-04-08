import { useState } from 'react'
import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

import { Outlet } from 'react-router-dom';  


function App() {
  return (
    <>
     <Navbar />
      <main className="">
        <Outlet />
        </main>
    </>
  )
}

export default App
