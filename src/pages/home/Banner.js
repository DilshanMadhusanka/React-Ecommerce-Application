import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import banner from '../../assets/Images/banner.png';

const Banner = () => {
  return (
    <div className="px-4 py-12 bg-PrimaryBG xl:px-28">
      <div className="flex flex-col items-center justify-between gap-16 py-28 md:flex-row-reverse">  
         {/* imaeg */}
         <div className="md:w-1/2">
            <img src={banner} alt="banner-image"/>
        </div>
        {/*text */}
        <div className="md:w-1/2 ">
            <h1 className="mb-5 text-5xl font-light">Collections</h1>
            <p className="text-xl mb-7">You can explore ans shop many differnt collection <br/>
            from various barands here.</p>
            <button className="flex items-center gap-2 px-6 py-2 font-semibold text-white bg-black rounded-sm hover:bg-orange-500">< FaShoppingCart className="inline-flex "/>Shop Now</button>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
