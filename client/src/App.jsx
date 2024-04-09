
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
