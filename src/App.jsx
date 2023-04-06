import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarDetails from './pages/CarDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-neutral h-screen overflow-y-auto">
      <div className='text-gray-800'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car_details/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
