import React from "react";

//icons
import { GiSmartphone } from "react-icons/gi";

const CategoryCard = () => {
  return (
    <>
      <div className="w-[170px] h-[145px] font-primary  border border-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer hover:shadow-lg">
        <GiSmartphone className="text-[80px]" />
        Phones
      </div>
    </>
  );
};

export default CategoryCard;
