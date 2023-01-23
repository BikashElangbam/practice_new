import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './E-Commerce/Login';
import ProductLists from './E-Commerce/ProductLists';
import Registration from './E-Commerce/Registration';
import Layout from './E-Commerce/Layout';
import Home from './E-Commerce/Home';
import About from './E-Commerce/About';
import Cart from './E-Commerce/Cart';
import ProfileList from './My_Practices/ProfileList';
function App() {
  return (
    <>
    {/* <FormValidation/> */}
       
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