import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
function App() {
  const [productsArray, setProductsArray] = useState([]);

  const getProducts = () => {
    const collectionRef = collection(db, "products");
    getDocs(collectionRef).then((data) => {
      setProductsArray(
        data.docs.map((item) => {
        return { ...item.data(), id: item.id };
        })
      );
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home productsArray={productsArray} />} />
          <Route
            path="/products/:id"
            element={<SingleProduct productsArray={productsArray} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
