import React from 'react'
import {FaSquarePlus} from "react-icons/fa6"
import { FaList } from 'react-icons/fa6'
import {MdFactCheck} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import logo from '../assets/logoV.png'
import { Link, NavLink } from 'react-router-dom'

const Slidebar = ({setToken}) => {
  return (
    <div className='max-sm:flexCenter max-xs:pb-3 rounded bg-white pb-3 sm:w-1/5 sm:min-h-screen'>
      <div className='flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-5 sm:pt-14'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center sm:pl-12'>
          <img src={logo} alt='logoImg' width={128}/>
        </Link>
        <div className='flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10'>
          <NavLink to={'/'} className={({isActive})=> isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}> 
            <FaSquarePlus />
            <div className='lg-flex hidden lg:block'>Add Item</div>
          </NavLink>
          <NavLink to={'/list'} className={({isActive})=> isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}> 
            <FaList />
            <div className='lg-flex hidden lg:block'>List</div>
          </NavLink>
          <NavLink to={'/orders'} className={({isActive})=> isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}> 
            <MdFactCheck />
            <div className='lg-flex hidden lg:block'>Orders</div>
          </NavLink>
          {/* Logout button */}
          <div className='' >
            <button onClick={()=> setToken('')} className='flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl'>
              <BiLogOut className='text-lg' />
              <div className='lg-flex hidden lg:block'>Logout</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slidebar
