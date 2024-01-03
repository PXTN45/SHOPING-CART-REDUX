import React from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "../redux/products/actions";
import { useDispatch } from "react-redux";
const AddPoduct = () => {
  const dispatch =useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };
  return (
    <div className="formCointainer">
      <h4 className="formTitle">Add New Porduct</h4>
      <form
        action=""
        className="space-y-4 text-[#fff]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label>Product Name</label>
          <input
            type="text"
            className="addProductInput"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-[#FF0000]">Product Name is required</span>
          )}
        </div>

        <div className="space-y-2">
          <label> Category</label>
          <select
            className="addProductInput"
            {...register("category", { required: true })}
          >
            <option value="">Select a category</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
          </select>
          {errors.category && (
            <span className="text-[#FF0000]">Category is required</span>
          )}
        </div>
        <div className="space-y-2">
          <label>Image URL</label>
          <input
            type="text"
            className="addProductInput"
            {...register("imageURL", { required: true })}
          />
          {errors.imageURL && (
            <span className="text-[#FF0000]">Image URL is required</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Price</label>
            <input
              type="number"
              className="addProductInput"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-[#FF0000]">Price is required</span>
            )}
          </div>
          <div className="space-y-2">
            <label>Quantity</label>
            <input
              type="number"
              className="addProductInput"
              id="lws-inputQuantity"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && (
              <span className="text-[#FF0000]">Quantity is required</span>
            )}
          </div>
        </div>
        <button type="submit" className="submit bg-indigo-600 text-white">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddPoduct;
