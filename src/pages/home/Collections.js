import React from "react";
import ZaraLogo from "../../assets/ZaraLogo.png";

const Collections = () => {
  return (
    <div className="px-4 my-20 bg-center bg-no-repeat bg-cover bg-section xl:px-28">
      <div className="h-[500px] flex justify-between  md:flex-row items-center">
        <div className="md:w-1/2 "></div>
        <div className="md:w-1/2">
          <img src={ZaraLogo} />
          <p className="my-8 text-lg text-white capitalize md:w-2/3 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="px-6 py-2 font-semibold text-black bg-white rounded-sm">See Collection</button>
          
        </div>
      </div>
    </div>
  );
};

export default Collections;
