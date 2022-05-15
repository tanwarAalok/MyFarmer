import './footer.styles.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const Footer = () => {
    return (
      <Fragment>
        <div className="footer-main-container">
          <div className="footer-left-container">
            <Link className="logo-wrapper" to="/">
              <div className="logoImg"></div>
            </Link>
          </div>
          <div className="footer-right-container">
            <Link to="/schemes">Government Schemes</Link>
            <Link to="/organicFarming" >Organic Farming</Link>
            <Link to="/machines" >Farm Machinery</Link>
          </div>
        </div>
      </Fragment>
    );
};

export default Footer;