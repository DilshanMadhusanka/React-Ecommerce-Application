import React from "react";
import { Link } from "react-router-dom";
import brand1 from "../../assets/Images/company/brand1.png";
import brand2 from "../../assets/Images/company/brand2.png";
import brand3 from "../../assets/Images/company/brand3.png";
import brand4 from "../../assets/Images/company/brand4.png";
import brand5 from "../../assets/Images/company/brand5.png";
import category1 from "../../assets/category/category1.png";
import category2 from "../../assets/category/category2.png";
import category3 from "../../assets/category/category3.png";
import category4 from "../../assets/category/category4.png";
import category5 from "../../assets/category/category5.png";

const companyLogo = [
  { id: 1, img: brand1 },
  { id: 2, img: brand2 },
  { id: 3, img: brand3 },
  { id: 4, img: brand4 },
  { id: 5, img: brand5 },
];

const Category = () => {
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-28 py-28">
      {/* brand logo */}
      <div className="flex flex-wrap justify-around gap-4 py-5 itmes-center">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="company-logo" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div  className="flex flex-col items-center gap-4 mt-8 md:flex-row">
        <p className="font-semibold text-center text-white uppercase bg-black md:p-1.5 p-2 md:-rotate-90 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/"><img src={category1} className="w-full transition-all duration-200 hover:scale-105"/></Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-3">
              <Link to="/"><img src={category2}  className="w-full transition-all duration-200 hover:scale-105"/></Link>             
              <Link to="/"><img src={category3} className="w-full transition-all duration-200 hover:scale-105"/></Link>             
              <Link to="/"><img src={category4} className="w-full transition-all duration-200 hover:scale-105"/></Link>             
              <Link to="/"><img src={category5} className="w-full transition-all duration-200 hover:scale-105"/></Link>             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
