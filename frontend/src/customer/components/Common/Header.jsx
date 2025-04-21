import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
function Header() {
  return (
    <div className='border-b-2 border-b-gray-200'>
      <Topbar/>
      <Navbar/>
    </div>
  )
}

export default Header
