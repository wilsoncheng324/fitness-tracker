import { useState } from 'react'
import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import { Outlet } from 'react-router-dom';  


function App() {
  return (
    <>
      <main className="">
        <Outlet />
        </main>
    </>
  )
}

export default App
