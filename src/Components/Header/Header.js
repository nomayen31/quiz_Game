
import React, { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// import { AiFillEye } from "react-icons/ai";

import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div  className="shadow-md px-16">
          <nav  className=' w-full'>
            <div onClick={()=>setOpen(!open)} className="h-10 w-10 text-black-500 md:hidden ">
            {/* {
             open ?  <XMarkIcon/> : <Bars3Icon/>
            } */}
            </div>
               
            <ul className={`md:flex p-5 justify-between  md:static absolute ${open ? 'top-70' : 'top-[-420px]'} duration-500 ease-in }`}>
            
           

            <div className=" hidden lg:block">
            <a className="w-full font-bold text-xl sm:text-3xl block ">
              <span className="text-blue-700"> Quiz. </span> Time
            </a>
          </div>

            <div className=" flex  flex-col md:flex-row gap-6  bg-orange-300 md:bg-transparent p-10 md:p-0">
                <Link className='font-bold hover:text-blue-500 text-orange-400 border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center ' to='/'>Home</Link>
                <Link className='font-bold hover:text-blue-500 text-orange-400 border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center ' to='/topics'>Topics</Link>
            
                <Link className='font-bold hover:text-blue-500 text-orange-400 border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center ' to='/blog'>Blog</Link>   
            </div>



              
               
         </ul>
        </nav>
        </div>
    );


    
};

export default Header;