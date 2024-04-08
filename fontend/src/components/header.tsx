import logo from "../../public/img/logo.png";
import user from "../../public/img/user.png";
import search from "../../public/img/search.png";
import heart from "../../public/img/tim.png";
import cart from "../../public/img/cart.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <a href="index.html">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="header-icon">
            <li>
              <a href="login.html">
                <img src={user} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={search} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={heart} alt="" />
              </a>
            </li>
            <li>
              <a href="cart.html">
                <img src={cart} alt="" />
              </a>
            </li>
          </div>
          <div className="header-icon-responsive">
            <button>=</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
