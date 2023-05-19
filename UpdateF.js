import Navbar from "../component/Navbar";

import { useState } from "react";
import UpdateForm from "../component/UpdateForm";
import { useParams } from "react-router-dom";

function UpdateF() {
  const { id } = useParams();
  return (
    <div className>
      <Navbar />
      <div>
        <UpdateForm />
      </div>
    </div>
  );
}

export default UpdateF;
