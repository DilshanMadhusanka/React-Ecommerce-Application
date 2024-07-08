import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";
import productsData from "../../assets/products.json"; // Adjust the path if needed
//import productsData from "/products.json";

const Producs = () => {
  {
    /* data tika enne object array ekak widihat e tika store krann */
  }
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  {
    /* meke backend ekak nathi nisa product.json file eken ganne data*/
  }

  {
    /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../assets/products.json");
        const data = await response.json();
        console.log(data);
        //console.log(response);
        setProducts(data);
      }catch (error) {
        console.log("Error fetching data :", error);
      }
    };
    fetchData();
  }, []);
  */
  }

  useEffect(() => {
    // Since we are importing the JSON data directly, we can set it directly
    setProducts(productsData);
    setFilteredItems(productsData);
  }, []);

  //console.log(products);

  // filtering functions
  const filtereItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category); //by default category eka all nam products okkom denn ehema naththam filer krann. pass karan category eka products.json eke category ekat samanada balnwa

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  //show all products

  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };

  // sorting functionality. me function eka pahal call kranwa select option thiyan thana
  const handleSortChange = (option) => {
    setSortOption(option);

    // logic for the sorting
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "lowt-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "hight-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="container px-4 mx-auto mb-12 max-w-screen-2xl xl:px-28">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* products cards*/}
      <div>
        <div className="flex flex-col flex-wrap items-center mb-8 space-y-3 md:flex-row md:justify-between">
          <div className="flex flex-row flex-wrap justify-start gap-4 md:items-center md:gap-8">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filtereItems("Dress")}>Clothing</button>
            <button onClick={() => filtereItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filtereItems("Bag")}>Bag</button>
          </div>

          {/* sorting option */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="p-2 bg-black">
              <FaFilter className="w-4 h-4 text-white" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="px-2 py-1 text-white bg-black rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="lowt-high">Low to High</option>
              <option value="hight-low">High to Low</option>
            </select>
          </div>
        </div>

        {/*card componet eka seperat hadala methan call kranwa  */}
        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Producs;
