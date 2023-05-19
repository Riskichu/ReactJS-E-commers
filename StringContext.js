import axios from "axios";
import { createContext, useState } from "react";

export const StringContext = createContext();
export const StringProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const respons = await axios.get(
        "https://api-project.amandemy.co.id/api/products"
      );
      setProduct(respons.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StringContext.Provider
      value={{
        product: product,
        setProduct: setProduct,
        fetchProduct: fetchProduct,
      }}
    >
      {children}
    </StringContext.Provider>
  );
};
