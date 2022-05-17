import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navbar.styles.scss';
import DropDown from "../../components/dropdown/dropdown.component";
import { useState } from "react";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <div className="logo"></div>
          </Link>

          <div className="nav-links-container">
            <Link className="nav-link" to="/schemes">
              Government Schemes
            </Link>
            <Link className="nav-link" to="/organicFarming">
              Organic Farming
            </Link>
            <Link className="nav-link" to="/machines">
              Farm Machinery
            </Link>
            <svg
              onClick={() => setToggle(!toggle)}
                className="menu"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </div>
        </div>
        {toggle ? <DropDown/> : ''}
        <Outlet />
      </Fragment>
    );
};

export default Navbar;