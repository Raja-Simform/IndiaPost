import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Router } from './components/Route/Router';

function App() {
  return (
    <div className='bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen'>
    <Navbar/>
    <Router/>
    </div>
  )
}

export default App;