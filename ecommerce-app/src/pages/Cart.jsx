import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotalAmount(total);
  }, [cart]);

  // ✅ EMPTY CART UI
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">

        <h2 className="mb-4 text-2xl font-bold">Your Cart is Empty 🛒</h2>

        <Link to="/">
          <button className="px-6 py-2 transition bg-purple-500 rounded-lg hover:bg-purple-600">
            Shop Now
          </button>
        </Link>

      </div>
    );
  }

  // ✅ FILLED CART UI
  return (
    <div className="grid gap-6 md:grid-cols-3">

      {/* Cart Items */}
      <div className="md:col-span-2">
        {cart.map((item, index) => (
          <CartItem key={item.id} item={item} itemIndex={index} />
        ))}
      </div>

      {/* Summary */}
      <div className="sticky p-6 border backdrop-blur-lg bg-white/10 border-white/20 rounded-xl h-fit top-24">

        <h2 className="mb-2 text-xl font-bold">Summary</h2>

        <p>Total Items: {cart.length}</p>

        <p className="mt-2 text-lg font-bold text-green-400">
          ${totalAmount.toFixed(2)}
        </p>

        <button className="w-full py-2 mt-4 transition bg-purple-500 rounded-lg hover:bg-purple-600">
          Checkout
        </button>

      </div>
    </div>
  );
};

export default Cart;