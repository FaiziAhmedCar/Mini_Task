import React from "react";

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{product.product_name}</td>
      <td className="border px-4 py-2">{product.category}</td>
      <td className="border px-4 py-2">₹{product.price}</td>
      <td className="border px-4 py-2">
        {product.status === "Inactive" ?  "NO"  :  "YES"}
      </td>
    </tr>
  );
};

export default ProductRow;
