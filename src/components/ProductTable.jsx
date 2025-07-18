import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import SortControls from "./SortControls";
import ProductRow from "./ProductRow";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortKey, setSortKey] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);

  const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_URL_API : "/api";
  const Api = `/v1/test`;

  const fetchData = async () => {
    try {
      const response = await axios.post(BASE_URL + Api, {});
      const data = response.data;

      setProducts(data);
      setFiltered(data);

      console.log("Data fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (category !== "All") {
      temp = temp.filter((p) => p.category === category);
    }

    if (inStockOnly) {
      temp = temp.filter((p) => p.inStock);
    }

    temp = temp.filter((p) => {
      const price = parseFloat(p.price);
      if (priceRange === "0-500") return price <= 500;
      if (priceRange === "500-1000") return price > 500 && price <= 1000;
      if (priceRange === "1000+") return price > 1000;
      return true;
    });

    temp.sort((a, b) => {
      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";

      if (sortKey === "price") {
        return sortAsc ? aVal - bVal : bVal - aVal;
      }

      return sortAsc
        ? aVal.toString().localeCompare(bVal.toString())
        : bVal.toString().localeCompare(aVal.toString());
    });
    setFiltered(temp);
  }, [products, category, priceRange, inStockOnly, sortKey, sortAsc]);

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="space-y-4">
      <Filters
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
        categories={uniqueCategories}
      />

      <SortControls
        sortKey={sortKey}
        setSortKey={setSortKey}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">In Stock</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductRow key={product.product_id} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
