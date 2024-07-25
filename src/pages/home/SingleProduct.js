import React, { useEffect , useState } from 'react'
import {useParams} from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import productsData from "../../assets/products.json"; // Adjust the path if needed

// item ekak click krama eke details tika show kranna 
const SingleProduct = () => {
  const {id } = useParams();
  const [products, setProducts] = useState([]);
  //console.log(id)  // mokak hari products ekak click krama e products ekata adala id eka print wenna 

  useEffect(() => {
    // Since we are importing the JSON data directly, we can set it directly
    const product = productsData.filter((p) => p.id == id);
    console.log(product);

    setProducts(product[0]);
    
  }, [id]);

  const {title,category,price,image,status} = products; //products kiyana state ekat store kranwa 
  return (
    <div>
      <div className="container px-4 mx-auto mt-28 max-w-screen-2xl xl:px-28">
         <div className="p-3 m-auto max-w-7xl">
           <div className="mt-6 sm:mt-10">
             <div className='grid grid-flow-col md:grid-cols-3 sm:grid-cols-2'>
               <div>
                <img src={image} alt="click karan product eka gannwa ude products state eken" className='w-full' />
               </div>
              {/* products detail */}
              <div className='ml-5'>
                <h1 className=' title'>{title}</h1>
                <p className="mt-3 text-base leading-6 text-justify text-gray-600 sm:text-left sm:mt-4">
                Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles. Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
                </p>
                <span className="flex items-center gap-1 my-2 text-xl text-yellow-400 sm:my-4">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </span>

                <p className="text-xl font-semibold text-red-500 sm:text-2xl">${price}</p>

                <div className="mt-4">
                  <div className="flex flex-col w-full gap-2 text-left">
                    <label className="font-semibold ">Quantity</label>
                    <input type="number" name='price ' id='price' defaultValue={1} required className="w-full max-w-full px-4 py-3 m-0 mb-1 text-sm font-semibold border border-gray-300 rounded-md outline-none md:py-3 md:px-4 focus:border-red-500" />
                    
                  </div>
                </div>
              </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default SingleProduct
