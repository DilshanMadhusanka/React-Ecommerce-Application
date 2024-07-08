

import React from 'react';
import { Link } from 'react-router-dom';



const Cards = ({ filteredItems }) => {
  return (
    <div className='grid grid-cols-1 gap-12 shadow-sm xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>

    {/*slice(0,8 )  kiyanne penna puluwan items gana.ita wada wadi unoth ethan ewa penna.*/}
      {filteredItems.slice(0,8).map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt=""  className='w-full mx-auto transition-all duration-300 hover:scale-105'/>
           
          </Link>
          <div className='px-4 mt-4'>
          
          <h4 className='mb-2 text-base font-semibold'>{item.title}</h4>
          <div className='flex justify-between'>
            <p className='text-black/50'>{item.category}</p>
            <p className='font-semibold'>{item.price}</p>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
