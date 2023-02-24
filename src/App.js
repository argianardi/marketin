import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Products from "./components/Products";
import { addToCart, getProducts } from "./utils/redux/cart/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const addtocart = (id) => dispatch(addToCart(id));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Header cartCount={cart} handleOpen={handleOpen} />
      <Products products={products} addToCart={addtocart} />
    </>
  );
}

export default App;
