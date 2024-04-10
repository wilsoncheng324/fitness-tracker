
import './App.css'

import { Outlet } from 'react-router-dom';  
import Navbar from './components/Navbar';


function App() {
  return (

    <div>
      <Navbar />
      <main className="">
        <div><Outlet /></div>
        
        </main>
    </div>
      
    
  )
}

export default App
