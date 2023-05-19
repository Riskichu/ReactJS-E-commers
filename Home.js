import React, { useContext, useEffect } from "react";
import Product from "../component/Product";
import { StringContext } from "../testcontext/StringContext";
import Navbar from "../component/Navbar";

function Home() {
  const { fetchProduct, product } = useContext(StringContext);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className>
      <Navbar />
      <h1 className="text-4xl text-cyan-500 text-center py-4">
        Catalog Product
      </h1>
      <div className="flex justify-between grid grid-cols-4 gap-8 mx-8">
        {product.map((product, index) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
