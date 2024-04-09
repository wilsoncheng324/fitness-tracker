import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
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
