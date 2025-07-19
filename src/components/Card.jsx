const Card = ({ product }) => {
  return (
    <div className="inline-flex m-2 mb-4">
      <div
        key={product.product_id}
        className="box  bg-white rounded-lg shadow-lg p-3 flex hover:shadow-xl transition-shadow duration-200"
      >
        <div className=" w-[12.7rem] h-[24.2rem] ">
          <div className="img h-38 bg-gray-400 rounded-lg flex items-center justify-center  mb-4 ">
            <img src="src/assets/logo.png" alt="productImage" />
          </div>

          <div className="content mb-4">
            <div className="header mb-2 bg-gray-200 p-2 rounded-lg">
              <p>Name :</p>
              <h2 className=" font-bold mb-4 text-[0.8rem] ">
                {product.product_name}
              </h2>
            </div>

            <div>
              <div className=" flex category mb-2 bg-gray-200 p-2 rounded-lg">
                <p >  Category: </p>
                <p className="text-[0.7rem] text-gray-700 ml-1 ">
                  {product.category}
                </p>
              </div>

            </div>
            <div className=" flex category mb-2 bg-gray-200 p-2 rounded-lg">
              <p>Available : </p>
              <p className="text-[0.7rem] text-gray-700 ml-1 ">
                {product.status === "Inactive" ? "NO" : "YES"}
              </p>
            </div>

            <div className=" flex category mb-2 bg-gray-200 p-2 rounded-lg">
              <p>Price : </p>
              <p className="text-gray-800 ml-1  text-[0.7rem]"> ₹ {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
