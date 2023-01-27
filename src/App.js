import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './E-Commerce/Component/Login';
import ProductLists from './E-Commerce/Component/ProductLists';
import Registration from './E-Commerce/Component/Registration';
import Layout from './E-Commerce/Component/Layout';
import Home from './E-Commerce/Component/Home';
import About from './E-Commerce/Component/About';
import Cart from './E-Commerce/Component/Cart'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>}/> 
          <Route path="/register" element={<Registration/>}/>
          <Route path="/productlist" element={<ProductLists/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/cart" element={<Cart/>}/> 
        </Route>
      </Routes>
            

    </>

  );
}

export default App;
