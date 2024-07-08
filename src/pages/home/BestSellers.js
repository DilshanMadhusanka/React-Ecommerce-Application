import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import productsData from "../../assets/products.json";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const bestSeller = products.filter((product) => product.status === "Best Sellers");
  //console.log(bestSeller);

  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-28">
      <div className="text-center">
        <h2 className="title">Best Sellers</h2>
        <p className="mx-auto mb-8 capitalize text-black/75 md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per
        </p>
      </div>

      {/*  best seller products card. mekedi use kranne "Swiper" google search krala install kranna . code eka aran copy krala danna */}
      <div className="mb-14">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1} spaceBetween={20}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {bestSeller.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/shop/${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  className="w-full mx-auto transition-all duration-300 hover:scale-105"
                />
              </Link>
              <div className="px-4 mt-4">
                <h4 className="mb-2 text-base font-semibold">{product.title}</h4>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
