import React from "react";
import AddPoduct from "./AddPoduct";
import { useSelector } from "react-redux";
import Productitem from "./Productitem";

const Home = () => {
  const products = useSelector((state) => state.products);
  // console.log(products);
  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
            {products.length ? (
                products.map((p, i) => (
                  <Productitem key={i} product={p} />
                ))
              ) : (
                <div>No Product</div>
              )}
            </div>
          </div>
          <AddPoduct />
        </div>
      </main>
    </div>
  );
};

export default Home;
