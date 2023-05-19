import axios from "axios";
import React, { useContext } from "react";
import { StringContext } from "../testcontext/StringContext";
import { Link } from "react-router-dom";

function Table({ setFormUpdate }) {
  const { fetchProduct, product } = useContext(StringContext);
  const onDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://api-project.amandemy.co.id/api/products/${id}`
      );
      fetchProduct();
      alert("Delete Product Berhasil");
    } catch (error) {
      console.log(error);
      alert("gagal Delete Product");
    }
  };

  return (
    <div className="max-w-6xl mx-auto w-full my-4">
      <div className="text-4xl text-cyan-500 text-center py-4">
        {" "}
        Table Product{" "}
      </div>
      <div className="flex justify-end">
        <Link to="/CreatePage">
          <button className=" mb-5 px-3 py-1 bg-cyan-500 text-white rounded">
            Create Form +
          </button>
        </Link>
      </div>
      <table className="border border-gray-500 w-full">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">ID</th>
            <th className="border border-gray-500 p-2">Name</th>
            <th className="border border-gray-500 p-2">Discount</th>
            <th className="border border-gray-500 p-2">Harga</th>
            <th className="border border-gray-500 p-2">Harga Diskon</th>
            <th className="border border-gray-500 p-2">Image</th>
            <th className="border border-gray-500 p-2">Highlight</th>
            <th className="border border-gray-500 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {
            return (
              <tr>
                <td className="border border-gray-500 p-2">{product.id}</td>
                <td className="border border-gray-500 p-2">{product.name}</td>
                <td className="border border-gray-500 p-2">
                  {product.is_diskon === true ? "Aktif" : "Mati"}
                </td>
                <td className="border border-gray-500 p-2">
                  {product.harga_display}
                </td>
                <td className="border border-gray-500 p-2">
                  {product.harga_diskon_display}
                </td>
                <td className="border border-gray-500 p-2">
                  <img src={product.image_url} alt="" className="w-64" />
                </td>
                <td className="border border-gray-500 p-2">
                  {product.category}
                </td>
                <td className="border border-gray-500 p-2">
                  <div className="flex gap-2 ">
                    <Link to={`/Update/${product.id}`}>
                      <button className="px-3 py-1 bg-cyan-500 text-white rounded">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => onDelete(product.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
