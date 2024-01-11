import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import {
  removFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/carts/actions";
import { addQuantity, removeQuantity } from "../redux/products/actions";

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
  const { id, name, imageURL, quantity, category, price, productId } = product;
  const handleremovFromCart = () => {
    dispatch(removFromCart(id))
    dispatch(addQuantity(productId, quantity))
  }
  return (
    <div className="rounded-lg">
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={imageURL}
          alt={product}
          className="w-full h-28 rounded sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-700">Price : {price} ฿</p>
            <p className="mt-1 text-sm text-gray-700">{category}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-1 bg-gray-100 py-1 px-3 5 duration-100 hover:bg-blue-500 hover:text-blue-500">
              {" "}
              -{" "}
            </span>
            <input
              type="number"
              name=""
              min="1"
              value={quantity}
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
            />
            <span className="cursor-pointer rounded-1 bg-gray-100 py-1 px-3 5 duration-100 hover:bg-blue-500 hover:text-blue-500">
              {" "}
              +{" "}
            </span>
          </div>
          <div className="text-items-center space-x-4">
            <p className="text sm">{price * quantity} ฿</p>
            <button className="lws-removeFromCart" onClick={handleremovFromCart}  >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
