import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import Bill from "../Components/Bill";

const MyCart = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <main className="py-12 max-w7xl container max-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 text-x1 font-bold">Shopping Carts</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {carts.length ? (
              carts.map((c, i) => <CartItem key={i} product={c} />)
            ) : (
              <div>No items</div>
            )}
          </div>
          <div className="space-y-6 md:w-1/3">
            <Bill />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
