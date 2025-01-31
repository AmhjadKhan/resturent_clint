import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/Authprovider";
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
  const navOptions = (
    <>
      <li className="hover:bg-white">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-white">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="hover:bg-white">
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
            user && isAdmin && <li className="hover:bg-white"><Link to="/dashboard/adminHome">Dashboard</Link></li>
      }
      {
            user && !isAdmin && <li className="hover:bg-white"><Link to="/dashboard/userHome">Dashboard</Link></li>
      }
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-gray-300 text-black  font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-white normal-case text-xl">Resturent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-ghost bg-red-500">
                LogOut
              </button>
            </>
          ) : (
            <>
              <li className="btn btn-primary">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
