import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
function Topbar() {
    return (
        <div className="bg-red-600 flex justify-between mx-auto h-8 items-center px-6">
            <div className="flex gap-x-4 text-white">
                <a href="#" className='hover:text-gray-300'><TbBrandMeta className='h-5 w-5'/></a> 
                <a href="#" className='hover:text-gray-300'><FaInstagram className='h-5 w-5'/></a> 
                <a href="#" className='hover:text-gray-300'><TbBrandMeta className='h-5 w-5'/></a> 
            </div>

            <p className='text-white text-sm'>We ship worldwide - Fast and reliable shopping! </p>

            <p className='text-white text-sm'> +91 7206554965 </p>
        </div>
    )
}

export default Topbar