import './organicFarming.styles.scss';
import GoToTop from '../../utils/gotoTop';
import STEPS_FOR_ORGANIC_FARMING from '../../utils/startOrganicFarming.json'
import NEED_FOR_ORGANIC from '../../utils/needForOrganic.json';

const OrganicFarming = () => {
    GoToTop();
    return (
      <div className="holder">
        <div className="need-for-organic">
          <h1 className='need-head'>Why there is need for Organic Farming ?</h1>
          <div className="steps">
            <ul>
              {
                NEED_FOR_ORGANIC.map(({ id, title, desc }) => (
                  <li key={id} >
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="start-farming-container">
          <h1>Steps to Start Organic Farming in India</h1>
          <div className="orgo-img">
            <img
              src="https://www.agrifarming.in/wp-content/uploads/2021/08/salad-2482457_1280.jpg"
              alt=""
            />
          </div>
          <div className="steps">
            <ul>
              {STEPS_FOR_ORGANIC_FARMING.map(({ id, title, desc }) => (
                <li key={id}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default OrganicFarming;