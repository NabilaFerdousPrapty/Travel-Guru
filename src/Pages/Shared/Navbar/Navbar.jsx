import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </li>
      <li><Link to='/news'>News</Link></li>
      <li><Link to='/destination'>Destination</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" className="w-1/2" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-4">
      
      <li>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </li>
      <li><Link to='/news'>News</Link></li>
      <li><Link to='/destination'>Destination</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn bg-[#F9A51A]">Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;