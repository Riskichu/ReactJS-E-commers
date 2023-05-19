import React, { useContext, useEffect, useState } from "react";
import { StringContext } from "../testcontext/StringContext";
import Navbar from "../component/Navbar";
import Table from "../component/Table";

function Tablepage() {
  const [setFormUpdate] = useState(false);
  const { fetchProduct, product } = useContext(StringContext);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className>
      <Navbar />
      <div>
        <Table product={product} setFormUpdate={setFormUpdate} />
      </div>
    </div>
  );
}

export default Tablepage;
