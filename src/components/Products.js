import React from "react";

const Products = ({ products, addToCart }) => {
  return (
    <div className="w-full h-auto p-10 mt-20 flex flex-wrap gap-4 justify-center items-center">
      {products?.map((product, index) => (
        <div
          className="w-40 h-auto justify-start items-center bg-slate-100 rounded-md flex flex-col p-2"
          key={index}
        >
          <img src={product.image} alt={product.title} className="w-32 h-24" />
          <p className="text-xs line-clamp-1">{product.title}</p>
          <div
            className="w-fit text-right text-sm text-white bg-green-500 px-1 rounded-sm cursor-pointer select-cone"
            onClick={() => addToCart(product)}
          >
            Add
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
