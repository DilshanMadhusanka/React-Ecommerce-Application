
import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Producs from './Producs';
import Collections from './Collections';
import BestSellers from './BestSellers';
import NewLetters from './NewLetters';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Producs/>
   <Collections/>
   <BestSellers/>
   <NewLetters/>
   <Footer/>

    </div>
  )
}

export default Home
