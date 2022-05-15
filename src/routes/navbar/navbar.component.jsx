import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navbar.styles.scss';

const Navbar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div className="logo"></div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/schemes" >Government Schemes</Link>
                    <Link className="nav-link" to="/organicFarming" >Organic Farming</Link>
                    <Link className="nav-link" to="/machines" >Farm Machinery</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navbar;