import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ product, decrement, increment, deleteItem }) => {
  return (
    <div className="w-full h-auto p-10 mt-20 flex flex-col space-y-4 justify-center items-center relative">
      {product?.map((val, index) => (
        <div
          key={index}
          className="flex  space-x-10 w-full border-orange-200 border-b justify-between items-center px-0 lg:px-24"
        >
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-center lg:justify-start items-center lg:w-[600px]">
            <img
              src={val.image}
              className="w-14 h-10 sm:w-28 sm:h-24 mx-auto sm:mx-0"
            />
            <div className="h-auto line-clamp-1">{val?.title}</div>
            <div className="flex space-x-2">
              <div
                className="cursor-pointer select-none bg-orange-500 px-3 rounded-sm"
                onClick={() => decrement(val.id)}
              >
                -
              </div>
              <p className="font-semibold">{val.qty}</p>
              <div
                className="cursor-pointer select-none bg-orange-500 px-3 rounded-sm"
                onClick={() => increment(val.id)}
              >
                +
              </div>
            </div>
            <p className="font-semibold">${val.price * val.qty}</p>
          </div>
          <div>
            <FaTrashAlt
              className="w-5 h-5 bg-red-500 text-white rounded-sm cursor-pointer"
              onClick={() => deleteItem(val.id)}
            />
          </div>
        </div>
      ))}
      {product.length ? (
        <div className="flex self-end w-40 border-b border-orange-600 text-lg font-bold">
          Total : $
          {product
            .reduce((sum, item) => {
              return sum + item.qty * item.price;
            }, 0)
            .toFixed(2)}
        </div>
      ) : (
        <p className="text-xl font-bold text-gray-500">
          Belum Ada Produk yang ditambahkan
        </p>
      )}
    </div>
  );
};

export default Cart;
