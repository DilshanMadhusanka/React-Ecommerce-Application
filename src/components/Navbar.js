import React, { useState } from 'react'
import { FaBars, FaSearch ,FaTimes } from "react-icons/fa";
import { FaUser,FaShoppingBag } from "react-icons/fa";
import logo from '../assets/public/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    {/* chategory list eka*/}
    const navItems =[
        {
            title:"Jewelry & Accessories", path:" /"
        },
        {
            title:"Clothing & Shoes", path:"/ "
        },
        {
            title:"Home & Living", path:" /"
        },
        {
            title:"Wedding & Party", path:"/ "
        },
        
        {
            title:"Toys & Entertainment", path:"/ "
        },
        
        {
            title:"Art & Collectibles", path:"/ "
        },
        
        
        {
            title:"Craft Supplies & Tools", path:"/ "
        },
        

        

    ]
  return (
    <header className='absolute top-0 left-0 right-0 px-4 max-w-screen-2xl xl:px-28'>
        <nav className='container flex items-center justify-between pt-6 pb-3 md:py-4'>
        {/* add search icon  */}
        <FaSearch className='hidden w-5 h-5 text-black cursor-pointer md:block'/>
        {/*  logo*/}
        <a href='/'><img src={logo} alt='logo' /></a>
        {/* account and shopping button */}
        <div className='items-center hidden gap-4 text-lg text-black sm:flex'>
            <a href='/'className='flex items-center gap-2'><FaUser />Account </a>
            <a href='/'className='flex items-center gap-2'><FaShoppingBag />Shopping </a>
        </div>

        {/* navbar for small devices  */ }
        <div className='sm:hidden'>
            <button onClick={toggleMenu}>
               {
                isMenuOpen ? <FaTimes className='w-5 h-5 text-black'/> :  <FaBars className='w-5 h-5 text-black'/>
               }
            </button>
        </div>
        </nav>

        {/* add vertical space  */}
        <hr/>

        {/* categoriy section. mekata array ekak hadala eka call kranna  */}
        <div className='pt-4'>
            <ul className='justify-between hidden text-black lg:flex itmes-center'>
                {
                    navItems.map(({title,path})=>(
                        <li key ={title} className='hover:text-orange-500'>
                            <Link to="/">{title}</Link> 
                        </li>
                    ))
                }
            </ul>
        </div>

        {/*only mobile menu items */}
        <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? " " : "hidden"} `}>
                {
                    navItems.map(({title,path})=>(
                        <li key ={title} className='my-3 cursor-pointer hover:text-orange-500'>
                            <Link to="/">{title}</Link> 
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar
