
import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Producs from './Producs';
import Collections from './Collections';
import BestSellers from './BestSellers';



const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Producs/>
   <Collections/>
   <BestSellers/>

    </div>
  )
}

export default Home
