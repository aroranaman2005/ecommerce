import React from 'react'
import { IoMdClose } from "react-icons/io";
import CartContents from '../Cart/CartContents';

function CartDrawer( { drawerOpen, toggleCartDrawer }) {

  return (
    <div
        className={`px-3 fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0': 'translate-x-full'}`}>
        

      {/* Close Button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-900"/>
        </button>
      </div>


      {/* Card contents with scrollable area */}
      <div className='overflow-y-auto flex-grow'>
        <h2 className='font-semibold text-xl'>Your Cart</h2>
        <CartContents/>
      </div>



      {/* Checkout Button fixed at bottom */}
      <div className='sticky bottom-0'>
        <button className='bg-black text-white w-full rounded-md p-1 '>Checkout</button>
        <p className='text-gray-500 text-xs text-center py-1'>Shipping, taxes, and discount codes calculated at checkout.</p>
      </div>


    </div>
  )
}

export default CartDrawer
