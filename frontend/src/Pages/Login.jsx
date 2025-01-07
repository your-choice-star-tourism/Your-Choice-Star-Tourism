import React, { useContext, useEffect, useState } from 'react'
import loginImg from '../assets/login.jpg'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext)
  const [currState, setCurrState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    try {
      setIsLoading(true)
      console.log('Sending reset request to:', `${backendUrl}/api/user/requestreset`)
      const response = await axios.post(`${backendUrl}/api/user/requestreset`, { 
        email 
      })
      
      if (response.data.success) {
        toast.success("Email Sent Successfully")
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Password reset error:', error)
      toast.error("Failed to process request. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (currState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}/api/user/register`, { 
          name, 
          email, 
          password 
        })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, { 
          email, 
          password 
        })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.error('Login/Register error:', error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      {/* container */}
      <div className='flex h-full w-full'>
        {/* image slide */}
        <div className='w-1/2 hidden sm:block'>
          <img src={loginImg} alt="" className='object-cover aspect-square h-full w-full' />
        </div>
        {/* form slide */}
        <div className='flexCenter w-full sm:w-1/2'>
          <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%]
        sm:max-w-md m-auto gap-y-5 text-gray-800'>
            <div className='w-full mb-4'>
              <h3 className='bold-36'>{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className='w-full'>
                <label htmlFor="name" className='medium-14'>Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-full px-3 ring-1 ring-slate-900/10 bg-primary mt-1' />
              </div>
            )}
            <div className='w-full'>
              <label htmlFor="email" className='medium-14'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='w-full px-3 ring-1 ring-slate-900/10 bg-primary mt-1' />
            </div>
            <div className='w-full'>
              <label htmlFor="password" className='medium-14'>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='w-full px-3 ring-1 ring-slate-900/10 bg-primary mt-1' />
            </div>
            <button type='submit' className='btn-dark w-full mt-5 !py-[7px] !rounded'>{currState === "Sign Up" ? 'Sign Up' : "Login"}</button>
            <div className='w-full flex flex-col gap-y-3 medium-14'>
              {currState === 'Login' && (
                <div>
                  <span 
                    onClick={!isLoading ? handleForgotPassword : undefined} 
                    className={`underline cursor-pointer ${isLoading ? 'opacity-50' : 'hover:text-secondary'}`}
                  >
                    Forgot your password?
                  </span>
                </div>
              )}
              {currState === 'Login' ? (
                <div><span onClick={() => setCurrState('Sign Up')} className='underline cursor-pointer hover:text-secondary'>Don't have an account? Create account</span></div>
              ) : (
                <div><span onClick={() => setCurrState('Login')} className='underline cursor-pointer hover:text-secondary'>Already have an account? Login</span></div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login