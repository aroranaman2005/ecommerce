import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingCart } from 'react-icons/hi'
import SearchBar from './SearchBar'
import { useState } from 'react'
import CartDrawer from '../Layout/CartDrawer'


function Navbar() {
  // for search button
  const [open, setOpen] = useState(false);
  const toggleSearch = () => {
    setOpen(!open);
  }


  // for cart drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }


  return (
    <div>
      <nav className='flex justify-between px-8 h-10 items-center my-1.5'>


        <div className='w-1/3'>
          <Link to="/" className='font-bold text-2xl'>
            TrendyCart
          </Link>
        </div>

        <div className='flex gap-x-9 font-semibold w-1/3'>
          <Link to="#" className=''>Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Top Wear</Link>
          <Link to="#">Bottom Wear</Link>
        </div>

        <div className='flex items-center gap-x-7 w-1/3 justify-end mr-2'>
          {open ?
            <></> :
            <Link to="#" className='hover:text-gray-600 text-[1.70rem]'>
              <HiOutlineUser />
            </Link>
          }

          {open ?
            <></> :
            <button onClick={toggleCartDrawer} className='hover:text-gray-600 text-[1.70rem] relative'>
              <HiOutlineShoppingCart />
              <span className='rounded-full bg-red-600 text-white text-xs absolute flex justify-center items-center w-4 h-4 -top-1 -right-1'>5</span>
            </button>
          }

          <SearchBar className="" open={open} setOpen={setOpen} toggleSearch={toggleSearch}/>

        </div>

      </nav>
      
      <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </div>
  )
}

export default Navbar
