import { useState } from 'react';
import { HiMenu, HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../Images/suraksha.png';

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
  )
}

const Navbar = () => {
// const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex mid:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-72 cursor-pointer' />
                {/* <h1 className='w-32 cursor-pointer text-black-800'>Suraksha</h1> */}
            </div>
            <ul className='text-pink-600 md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["About", "Awareness"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-black'>Login</li>
            </ul>
            {/* <div className='flex relative'>
                {toggleMenu
                  ? <AiOutlineClose fontSize={28} classname="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)} />
                  : <HiMenuAlt4 fontSize={28} classname="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)} />
                }
            </div> */}
        </nav>
    )
}

export default Navbar;