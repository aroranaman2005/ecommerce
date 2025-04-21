import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";

function SearchBar({open, setOpen, toggleSearch}) {
    const [searchTerm, setSearchTerm] = useState('');
    const changeHandler = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={`transition-all duration-300`}>
            {
                open ?
                    <div className='flex bg-gray-100 pl-4 py-2 pr-1 rounded-lg w-full '>
                        <form>
                            <div>
                                <input type="text" className='focus:outline-none placeholder:text-gray-700' name="search"  placeholder='Search' id="" onChange={changeHandler} value={searchTerm} />
                            </div>
                        </form>
                        <button onClick={toggleSearch}>
                            <IoMdClose className='flex text-gray-600'/>
                        </button>
                    </div>

                    : <button onClick={() => { setOpen(!open) }} className='hover:text-gray-600 text-[1.70rem]'><HiSearch /></button>
            }
        </div>
    );
}

export default SearchBar

// import React, { useState } from 'react';
// import { HiSearch } from 'react-icons/hi';
// import { IoMdClose } from "react-icons/io";

// function SearchBar({ open, setOpen, toggleSearch }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const changeHandler = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="relative">
//             {/* Search Form */}
//             <div
//                 className={`absolute left-0 top-0 w-full 
//                 bg-gray-100 pl-4 py-2 pr-1 rounded-lg 
//                 flex items-center 
//                 transition-all duration-300 
//                 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
//                 `}
//             >
//                 <form className="flex-grow">
//                     <input
//                         type="text"
//                         className="focus:outline-none placeholder:text-gray-700 bg-transparent w-full"
//                         name="search"
//                         placeholder="Search"
//                         onChange={changeHandler}
//                         value={searchTerm}
//                     />
//                 </form>
//                 <button onClick={toggleSearch}>
//                     <IoMdClose className="text-gray-600" />
//                 </button>
//             </div>

//             {/* Search Button */}
//             <button
//                 onClick={() => { setOpen(!open) }}
//                 className={`transition-all duration-300 text-[1.70rem] ${open ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
//             >
//                 <HiSearch className="hover:text-gray-600" />
//             </button>
//         </div>
//     );
// }

// export default SearchBar;
