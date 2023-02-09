import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './E-Commerce/Component/Login';
import ProductLists from './E-Commerce/Component/ProductLists';
import Registration from './E-Commerce/Component/Registration';
import Layout from './E-Commerce/Component/Layout';
import Home from './E-Commerce/Component/Home';
import AddProduct from './E-Commerce/Component/AddProduct';
import UpdateProduct from './E-Commerce/Component/UpdateProduct';
import About from './E-Commerce/Component/About';
import Cart from './E-Commerce/Component/Cart';
import Products from './E-Commerce/Component/Products';
import ChangePassword from './E-Commerce/Component/ChangePassword';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Registration/>}/>
          <Route path="/productlist" element={<ProductLists/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/> 
          <Route path="/cart" element={<Cart/>}/> 
        </Route>
      </Routes>
            

    </>

  );
}

export default App;
