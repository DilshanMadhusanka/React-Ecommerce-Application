import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterImage from '../../assets/footer.png'
const Footer = () => {
  return (
    <div className='mt-20 '>
      <div className='grid justify-between grid-cols-1 gap-4 mb-10 ml-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>

        <div className=''>
          <h1 className='mb-3 font-bold'> CORAL</h1>
          <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua</p>

        <div className='flex gap-5 mt-5'>
            <FaFacebookF/>
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
        </div>

        </div>

        <div className=''>
<h2 className='mb-3 font-bold'>CATALOG</h2>
<div className='flex flex-col text-sm text-gray-600'>
    <a href=""className='mb-1'>Necklaces</a>
    <a href=""className='mb-1'>Hoodies</a>
    <a href=""className='mb-1'>Jewelry Box</a>
    <a href=""className='mb-1'>T-shirt</a>
    <a href="">Jacket</a>
</div>
        </div>

        <div className=''>
<h2 className='mb-3 font-bold'>ABOUT US</h2>
<div className='flex flex-col text-sm text-gray-600'>
    <a href=""className='mb-1'>Our Producers</a>
    <a href=""className='mb-1'>Sitemap</a>
    <a href=""className='mb-1'>About Us</a>
    <a href="">Terms & Conditions</a>
</div>
        </div>

        <div className=''>
        <h2 className='mb-3 font-bold'>CUSTOMER SERVICES</h2>
<div className='flex flex-col text-sm text-gray-600'>
    <a href="" className='mb-1'>Contact Us</a>
    <a href="" className='mb-1'>Track Your Order</a>
    <a href=""className='mb-1'>Product Care & Repair</a>
    <a href=""className='mb-1'>Book an Appointment</a>
    <a href=""className='mb-1'>Shipping & Returns</a>
</div>
        </div>

      </div>

      <div>
        <img src={FooterImage} alt=""  className='w-full '/>
      </div>
    </div>
  )
}

export default Footer

