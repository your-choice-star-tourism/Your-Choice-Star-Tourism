import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'
import Tours from './Pages/Tours'
import HelpCenter from './Pages/HelpCenter'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import ItemDetail from './Pages/ItemDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Orders from './Pages/Orders'
import Verify from './Pages/Verify'
import ResetPassword from './Pages/ResetPassword'
import About from './Pages/About'

const App = () => {
  return (
    <main className='overflow-hidden bg-primary'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/HelpCenter' element={<HelpCenter />} />
        <Route path='/Aboutus' element={<About />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element ={<PlaceOrder />} />
        <Route path='/tours/:id' element={<ItemDetail />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </main>
  )
}

export default App
