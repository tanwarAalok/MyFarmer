import './dropdown.styles.scss';
import { Link } from 'react-router-dom';

const DropDown = () => {
    return (
      <div className='dropdown'>
        <Link className="nav-link" to="/schemes">
          Government Schemes
        </Link>
        <Link className="nav-link" to="/organicFarming">
          Organic Farming
        </Link>
        <Link className="nav-link" to="/machines">
          Farm Machinery
        </Link>
      </div>
    );
};

export default DropDown;