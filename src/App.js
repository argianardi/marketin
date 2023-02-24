import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import {
  deleteItem,
  addToCart,
  getProducts,
  incrementItem,
  decrementItem,
} from "./utils/redux/cart/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const addtocart = (id) => dispatch(addToCart(id));
  const handleDelete = (id) => dispatch(deleteItem(id));
  const handleIncrement = (id) => dispatch(incrementItem(id));
  const handleDecrement = (id) => dispatch(decrementItem(id));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Header cartCount={cart} handleOpen={handleOpen} />
      {isOpen ? (
        <Cart
          product={cart}
          deleteItem={handleDelete}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
      ) : (
        <Products products={products} addToCart={addtocart} />
      )}
    </>
  );
}

export default App;
