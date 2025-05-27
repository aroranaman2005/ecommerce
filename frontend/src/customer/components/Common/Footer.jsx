import React from 'react'
import { Link } from 'react-router-dom'
import qr_code from '../../../assets/qr_code.png'
import appleStore from '../../../assets/apple_store.png'
import playStore from '../../../assets/play_store.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
function Footer() {
  return (
    <div className='bg-black text-white'>

      <div className='hidden md:block pt-15 pb-5'>

        <div className='part1 flex flex-row justify-around'>
          <div className="item1">
            <p className='text-[1.1rem] mb-3 font-semibold'>Exclusive</p>
            <p className='text-[0.95rem] mb-3'>Subscribe</p>
            <p className='text-[0.85rem] mb-3'>Get 10% off your first order</p>
            {/* Newsletter Form */}
            <form action="" className='flex'>
              <input type="email" placeholder='Enter your email' className='p-3 w-full focus:outline-none focus:ring-2 focus: ring-gray-500 transition-all' required />
              <button type='submit' className='rounded-r-md'>Subscribe</button>
            </form>
          </div>

          {/* Support */}
          <div className="item2">
            <h3 className='text-[1rem] mb-3 font-semibold'>Support</h3>
            <ul className='space-y-4 text-gray-300'>
              <li>
                <Link to="#">
                  Mandothi Bazaar, Haryana
                </Link>
              </li>
              <li>
                <Link to="#">
                  kewalkrishan@gmail.com
                </Link>
              </li>
              <li>
                <Link to="#">
                  +91 72065 65965
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="item3 ">
            <h3 className='text-[1rem] mb-3 font-semibold'>Account</h3>
            <ul className='space-y-3 text-gray-300'>
              <li>
                <Link to="#">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="#">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="#">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="#">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="item4">
            <h3 className='text-[1rem] mb-3 font-semibold'>Quick Link</h3>
            <ul className='space-y-3 text-gray-300'>
              <li>
                <Link to="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="#">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="item5">
            <p className='text-[1.2rem] mb-3 font-semibold'>Download App</p>
            <p className='text-gray-400 mb-3 text-[0.75rem]'>Save $3 with App New User Only</p>
            <div className='flex flex-row justify-around mb-4'>
              <p className=''><img className='h-20 w-20' src={qr_code} alt="QR Code" /></p>
              <p className='flex flex-col justify-around'>
                <a href="https://play.google.com/"><img src={playStore}  className="h-6 w-24 border-1 rounded-sm border-white" alt="Play Store" /></a>
                <a href="https://www.apple.com/"><img src={appleStore} className="h-6 w-24 border-1 rounded-sm border-white" alt="Apple Store" /></a>
              </p>
            </div>
            <p className='flex flex-row justify-between mt-3'>
              <a href="https://twitter.com/nobero_tech" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaTwitter className='inline-block mr-2' />
              </a>
              <a href="https://www.facebook.com/nobero.official" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaFacebookF className='inline-block mr-2' />
              </a>
              <a href="https://www.instagram.com/nobero_tech/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaInstagram className='inline-block mr-2' />
              </a>
              <a href="https://www.linkedin.com/company/nobero/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaLinkedinIn className='inline-block mr-2' />
              </a>
            </p>
          </div>

        </div>

        <div>
          <p className='mt-12 pt-6 text-center text-sm text-gray-400 tracking-tighter'>© 2024 NOBERO. All rights reserved.</p>
        </div>
        
      </div>



      <div className='block md:hidden'>

      </div>
    </div>
  )
}

export default Footer
