import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";

const priceRanges = [
  { label: "All", value: "all" },
  { label: "Under ₹500", value: "0-500" },
  { label: "₹500 - ₹1000", value: "500-1000" },
  { label: "₹1000+", value: "1000+" },
];

const Filters = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
  categories,
}) => {
  return (
    // <div className='flex flex-wrap justify-center items-center'>

    <div className="flex flex-wrap gap-6  items-center bg-white p-2  pt-1 rounded shadow shadow-gray-300 ">
      {/* Category Dropdown */}
      <div className="flex flex-col items-center gap-1  ">
        <label className="flex text-gray-600 w-full text-[12px] ">
          Category
        </label>
        <div className="flex items-center gap-1">
          <IoIosApps className="h-4 w-4" />
        <select
          className=" bg-gray-200 p-1  rounded w-20 cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
          </div>
      </div>

        {/* Price Range */}
      <div className="flex flex-col items-center gap-1">
        <label className="flex text-gray-600 w-full text-[12px] ">
          Price Range
        </label>

        <div className="flex items-center gap-1 ">
          <FaRupeeSign className="h-4 w-4" />
          <select
            className="bg-gray-200 p-1 rounded w-20 cursor-pointer "
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* In Stock Toggle */}
      <div className="flex flex-col  bg-gray-300 rounded-xl p-2 mt-5 hover:shadow-lg transition-shadow duration-300 ">
        <label className="flex items-center gap-2 cursor-pointer text-gray-600 text-[12px]">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In Stock Only
        </label>
      </div>
    </div>
    // </div>
  );
};

export default Filters;
