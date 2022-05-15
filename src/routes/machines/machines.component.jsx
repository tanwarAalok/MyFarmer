import './machines.styles.scss';
import MACHINES from '../../utils/machines.json';
import GoToTop from '../../utils/gotoTop';

const Machines = () => {
    GoToTop();
    return (
      <div className="machine-main-container">
        {MACHINES.map((machine) => (
          <li>
            <div className="main-card">
              <h1>
                <span>{machine.id}.</span> {machine.title}
              </h1>
              <p>{machine.description}</p>
              <div className="imgCard">
                <img src={machine.img} alt="" />
              </div>
            </div>
          </li>
        ))}
      </div>
    );
};

export default Machines;