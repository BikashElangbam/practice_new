import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import './navbar.scss'

const Layout = () => {

  const { cartItems, removeAllCart} = useContext(CartContext);
  return (
    <div>
      <div className='navigation-container'>
        <ul className='navbar'>
          <li>
          <Link to='/'>Home</Link>
          </li>
          {/* <li>
            <Link to='/productlist'>ProductLists</Link>
          </li> */}
          <li>
            <Link to='/addProduct'>AddProduct</Link>
          </li>
          {/* <li>
            <Link to='/update/:id'>UpdateProduct</Link>
          </li> */}
          <li>
            <Link to='/products'>Products</Link>
          </li>
          {/* <li>
          <Link to='/about'>About</Link>
          </li> */}
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/cart'>Cart({cartItems.length})</Link>
          </li>
          <li>
            <button onClick={()=> removeAllCart()}> Clear All</button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
