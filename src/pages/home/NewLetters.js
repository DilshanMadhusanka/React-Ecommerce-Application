import React from 'react';
import {Link} from 'react-router-dom'
import Inster1 from '../../assets/Instergram/7.png'
import Inster2 from '../../assets/Instergram/8.png'
import Inster3 from '../../assets/Instergram/09.png'
import Inster4 from '../../assets/Instergram/10.png'
import Inster5 from '../../assets/Instergram/11.png'
import Inster6 from '../../assets/Instergram/12.png'

const NewLetters = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
      <h2 className='mb-15 title'> Follow Products and discounts on Instagram</h2>
        
        {/* instergram grid */}

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link to='/'>
               <img src={Inster2} alt="" style={{ width: '200px', height: '200px' }} />
            </Link>
            <Link to='/'>
               <img src={Inster1} alt="" style={{ width: '200px', height: '200px' }}/>
            </Link>
            <Link to='/'>
               <img src={Inster3} alt="" style={{ width: '200px', height: '200px' }}/>
            </Link>
            <Link to='/'>
               <img src={Inster4} alt=""style={{ width: '200px', height: '200px' }} />
            </Link>
            <Link to='/'>
               <img src={Inster5} alt="" style={{ width: '200px', height: '200px' }}/>
            </Link>
            <Link to='/'>
               <img src={Inster6} alt="" style={{ width: '200px', height: '200px' }}/>
            </Link>
        </div>


        <div>
            <h2 className="mb-8 title">Or subscribe to the newsletter</h2>
            <form className="mx-auto text-center md:w-1/2">
             <input type="email" name='email' id=' email' placeholder='Email address...' className="w-full h-8 pl-2 mb-5 mr-4 bg-transparent border-b-2 border-black outline-none md:w-2/3 placeholder:text-black/50" />
            <input type="submit" value={"submit"} className="px-6 py-1 text-white bg-black rounded-sm" />
            </form>
        </div>
    </div>
  )
}

export default NewLetters

