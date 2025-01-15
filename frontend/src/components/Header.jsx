import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoV.png';
import Navbar from './Navbar';
import { CgMenuLeft } from "react-icons/cg";
import { TbUserCircle } from "react-icons/tb";
import { RiUserLine, RiShoppingBag4Line } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext';
import { CurrencyContext } from '../context/CurrencyContext';

const Header = () => {
  const { navigate, token, setToken, getCartCount, setCartItems, setCartItemsChild } = useContext(ShopContext);
  const { selectedCurrency, setSelectedCurrency } = useContext(CurrencyContext);
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setCartItemsChild({});
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Close the menu if opened when scrolling occurs
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
      // Detect scroll
      setActive(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]);

  return (
    <header
      className={`fixed top-0 w-full left-0 right-0 z-50 bg-white ${
        active ? 'bg-white py-0.5 px-[0.4px]' : 'bg-primary px-[0.4px]'
      } flexBetween border-b border-slate-900/10 rounded transition-all duration-300 sm:px-16`}
    >
      {/* Logo */}
      <Link to={'/'} className='flex-1 flex items-center justify-start'>
        <img
          src={logo}
          alt="Company Logo"
          width={110}
          className='sm:flex mr-2'
        />
      </Link>

      {/* Navbar */}
      <div className='flex-2'>
        <Navbar
          menuOpened={menuOpened}
          toggleMenu={toggleMenu}
          containerStyles={`${
            menuOpened
              ? 'flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl'
              : 'hidden xl:flex justify-center gap-x-8 xl:gap-x-14 medium-15 px-2 py-1'
          }`}
        />
      </div>

      {/* Right Side */}
      <div className='flex-1 flex items-center justify-end gap-x-2 sm:gap-x-10'>
        <CgMenuLeft
          onClick={toggleMenu}
          className='text-2xl xl:hidden cursor-pointer'
        />
        <Link to={'/cart#cart'} className='flex relative'>
          <RiShoppingBag4Line className='text-[33px] bg-secondary text-primary p-1.5 rounded-full' />
          <span className='bg-primary ring-1 ring-slate-900/5 medium-14 absolute left-5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md'>{getCartCount()}</span>
        </Link>
        <div className='relative group'>
          <div className=''>
            {token ? (
              <div>
                <TbUserCircle className='text-[29px] cursor-pointer' />
              </div>
            ) : (
              <button onClick={() => navigate('/login')} className='btn-outline flexCenter gap-x-1 xxs:text-[12px]'>
                Login <RiUserLine />
              </button>
            )}
          </div>
          {token && (
            <>
              <ul className='bg-white p-1 w-32 ring-slate-900/5 rounded absolute right-0 top-7 hidden group-hover:flex flex-col regular-14 shadow-md'>
                <li onClick={() => navigate('/orders')} className='p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer'>
                  Orders
                </li>
                <li onClick={logout} className='p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer'>
                  Logout
                </li>
              </ul>
            </>
          )}
        </div>

    {/* Currency Dropdown */}
    <div className='relative xxs:text-[12px]'>
      <select
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        className='border-none rounded p-1 cursor-pointer'
      >
        <option value="AED">&#x1f1e6;&#x1f1ea; AED</option>
        <option value="USD">&#x1f1fa;&#x1f1f8; USD</option>
      </select>
    </div>
      </div>
    </header>
  );
};

export default Header;
