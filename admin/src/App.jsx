import React, { useState } from 'react'
import Slidebar from './components/Slidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'
import { useEffect } from 'react'

export const backend_url = import.meta.env.VITE_BACKEND_URL
export const currency = "AED"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ):(
      <div className='bg-primary text-[#404040]'>
        <div className='mx-auto flex flex-col sm:flex-row'>
          <Slidebar setToken={setToken} />
          <Routes>
            <Route path="/" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
          </Routes>
        </div>
      </div>
      )}
    </main>
  )
}

export default App
