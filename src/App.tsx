
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Pincode from './pages/Pincode/Pincode';
import Navbar from './components/Navbar/Navbar';
import Branch from './pages/Branch/Branch';

function App() {
  

  return (
    <div className='bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pincodesearch" element={<Pincode/>}/>
      <Route path="/branchsearch" element={<Branch/>}/>
    </Routes>
    </div>
  )
}

export default App;