import { Link, Outlet } from 'react-router-dom';
import "./navbar.scss";
const Layout = () => {
  return (
    <div>
      {/* <header>Header</header> */}
      <div className='mid-navbar'>
        <ul className='navbar'>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/productlist'>ProductLists</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div className="right-navbar">
        <ul className= 'navbar'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </div>
      <Outlet />
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
