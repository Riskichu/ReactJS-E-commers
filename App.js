import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homepage/Home";
import Tablepage from "./homepage/Tablepage";
import CreatePage from "./homepage/CreatePage";
import UpdateF from "./homepage/UpdateF";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Tablepage />} />
          <Route path="/CreatePage" element={<CreatePage />} />
          <Route path="/Update/:id" element={<UpdateF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
