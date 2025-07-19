import React from "react";
import { RiExpandUpDownFill } from "react-icons/ri";

const SortControls = ({ sortKey, setSortKey, sortAsc, setSortAsc }) => {
  return (
    <div className="flex justify-between items-center bg-white p-2 rounded shadow shadow-gray-300">
      <div className="flex items-center gap-4 ">
        {/* Sort Key Dropdown */}
        <div className="flex flex-col items-center gap-1">

        <label className="text-gray-600  w-full text-[12px]">Sort By</label>
        <div className="flex items-center gap-1">
          <RiExpandUpDownFill className="h-4 w-4"  />
        <select
          className="bg-gray-200 p-1 w-20 rounded cursor-pointer"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
            </div>
          </div>

        <button
          className=" p-1 w-20 rounded bg-gray-200 hover:bg-gray-300
           transition-colors hover:shadow-lg  hover:cursor-pointer mt-5"
          onClick={() => setSortAsc(!sortAsc)}
        >
          {sortAsc ? "ASC" : "DESC"}
        </button>
      </div>
    </div>
  );
};

export default SortControls;
