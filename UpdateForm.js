import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StringContext } from "../testcontext/StringContext";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const initialState = {
  name: "",
  harga: "",
  image_url: "",
  description: "",
  stock: "",
  harga_diskon: "",
  is_diskon: false,
  category: "",
};
const schemaValidation = Yup.object({
  name: Yup.string().required("Nama Wajib di isi"),
  harga: Yup.string().required("Harga Wajib di isi"),
  image_url: Yup.string()
    .required("Image_Url di isi")
    .url("Image Url Tidak Valid"),
  description: Yup.string().required("Deskripsi Wajib di isi"),
  stock: Yup.string().required("Stock Wajib di isi"),
  harga_diskon: Yup.string().required("Stock Wajib di isi"),
  is_diskon: Yup.boolean(),
  category: Yup.string().required("Kategory Wajib di isi"),
});

function UpdateForm({}) {
  const { fetchProducts } = useContext(StringContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState(initialState);

  const handleUpdate = async () => {
    console.log(input);
    try {
      const response = await axios.put(
        `https://api-project.amandemy.co.id/api/products/${id}`,
        {
          name: values.name,
          image_url: values.image_url,
          harga: values.harga,
          description: values.description,
          stock: values.stock,
          harga_diskon: values.harga_diskon,
          is_diskon: values.is_diskon,
          category: values.category,
        }
      );
      alert("Berhasil Update Product");
      navigate("/Table");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://api-project.amandemy.co.id/api/products/${id}`
      );
      console.log(response.data.data);
      setInput({
        name: response.data.data.name,
        harga: response.data.data.harga,
        image_url: response.data.data.image_url,
        category: response.data.data.category,
        stock: response.data.data.stock,
        is_diskon: response.data.data.is_diskon,
        harga_diskon: response.data.data.harga_diskon,
        description: response.data.data.description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);
  const { handleChange, values, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: input,
      onSubmit: handleUpdate,
      validationSchema: schemaValidation,
      enableReinitialize: true,
    });

  return (
    <div className="px-8">
      <section className="max-w-6xl mx-auto shadow-lg rounded-lg bg-white p-8 my-8">
        <h1 className="text-2xl text-cyan-500">Update Product</h1>
        <div className="grid grid-cols-5 gap-x-6 gap-y-4 my-2">
          <div className="col-span-3">
            <label className="block mb-1"> Nama Barang</label>
            <input
              value={values.name}
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
              placeholder="Masukkan Harga Barang"
            />
            <p className="col-span-3 text-red-500 ">
              {touched.name === true && errors.name}
            </p>
          </div>
          <div className="col-span-2">
            <label className="block mb-1"> Stock Barang</label>
            <input
              value={values.stock}
              name="stock"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
              placeholder="Masukkan Nama Barang"
            />
            <p className="col-span-3 text-red-500 ">
              {touched.stock === true && errors.stock}
            </p>
          </div>
          <div className="col-span-2">
            <label className="block mb-1"> Harga Barang</label>
            <input
              value={values.harga}
              name="harga"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
              placeholder="Masukkan Nama Barang"
            />
            <p className="col-span-3 text-red-500 ">
              {touched.harga === true && errors.harga}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 gap-3">
            <input
              type="checkbox"
              className=""
              onChange={handleChange}
              checked={values.is_diskon}
              name="is_diskon"
            />
            <label className="">Status Diskon</label>
          </div>
          {input.is_diskon === true ? (
            <div className="col-span-2">
              <label className="block mb-1"> Harga Diskon</label>
              <input
                value={values.harga_diskon}
                name="harga_diskon"
                onChange={handleChange}
                type="text"
                className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
                placeholder="Masukkan Harga Barang"
              />
            </div>
          ) : (
            <div className="col-span-2"></div>
          )}
          <div className="col-span-2">
            <label className="block mb-1"> Kategori Barang</label>
            <select
              value={values.category}
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              id=""
              className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
            >
              <option value="" disabled>
                Pilih Kategori
              </option>
              <option value="teknologi">Teknologi</option>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
              <option value="hiburan">Hiburan</option>
              <option value="kendaraan">Kendaraan</option>
            </select>
            <p className="col-span-3 text-red-500 ">
              {touched.category === true && errors.category}
            </p>
          </div>
          <div className="col-span-3">
            <label className="block mb-1">Gambar Barang</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image_url}
              name="image_url"
              type="text"
              className="block border border-gray-400 rounded-md w-full px-2 py-1 text-sm"
              placeholder="Masukkan Image URL"
            />
            <p className="col-span-3 text-red-500 ">
              {touched.image_url === true && errors.image_url}
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <label className="block mb-1">Deskripsi</label>
          <textarea
            value={values.description}
            name="description"
            onChange={handleChange}
            id=""
            rows="6"
            className="w-full py-1 px-2 rounded-md bg-white border border-gray-400"
          ></textarea>
        </div>
        <div className="  gap-4 my-4">
          <button
            onClick={handleUpdate}
            className="bg-cyan-500 text-white border-2 border-cyan-500 px-4 py-1 rounded-lg"
          >
            Update
          </button>
        </div>
      </section>
    </div>
  );
}

export default UpdateForm;
