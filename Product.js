import React from "react";

function Product({ product }) {
  return (
    <div class="bg-white rounded-xl shadow-lg h-80 lg:h-96 flex flex-col">
      <img
        src={product.image_url}
        class="w-full h-44 lg:h-64 object-cover rounded-t-xl"
        alt=""
      />
      <div class="grow flex flex-col justify-between px-4 my-2">
        <h1 class="text-gray-700 text-xl">{product.name}</h1>
        {product.harga_diskon == 0 ? (
          <div>
            <h2 class="text-lg text-black-400 ">{product.harga_display}</h2>
          </div>
        ) : (
          <div>
            <h1 class="line-through">{product.harga_display}</h1>
            <h2 class="text-lg text-red-400">{product.harga_diskon_display}</h2>
          </div>
        )}

        <p class="text-blue-500">Stock {product.stock}</p>
      </div>
    </div>
  );
}

export default Product;
