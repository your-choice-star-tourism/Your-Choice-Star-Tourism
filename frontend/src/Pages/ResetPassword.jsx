import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ResetPassword = () => {
  const { token } = useParams()
  const { navigate, backendUrl } = useContext(ShopContext)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match")
      return
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long")
      return
    }

    try {
      const response = await axios.post(backendUrl + '/api/user/resetpassword', {
        token,
        newPassword
      })

      if (response.data.success) {
        toast.success("Password reset successful")
        navigate('/login')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      <div className='flexCenter w-full h-full'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800'>
          <div className='w-full mb-4'>
            <h3 className='bold-36'>Reset Password</h3>
          </div>
          <div className='w-full'>
            <label htmlFor="newPassword" className='medium-14'>New Password</label>
            <input 
              type="password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder='Enter new password'
              className='w-full px-3 ring-1 ring-slate-900/10 bg-primary mt-1'
            />
          </div>
          <div className='w-full'>
            <label htmlFor="confirmPassword" className='medium-14'>Confirm Password</label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm new password'
              className='w-full px-3 ring-1 ring-slate-900/10 bg-primary mt-1'
            />
          </div>
          <button type='submit' className='btn-dark w-full mt-5 !py-[7px] !rounded'>
            Reset Password
          </button>
        </form>
      </div>
    </section>
  )
}

export default ResetPassword