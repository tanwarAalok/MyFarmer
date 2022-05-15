import './government-scheme.styles.scss';
import SCHEMES from '../../utils/schemes.json';
import GoToTop from '../../utils/gotoTop';

const GovernmentScheme = () => {
  GoToTop();
    return (
      <div className="gov-container">
        <ol>
          {SCHEMES.map((scheme) => (
            <li key={scheme.id}>
              <div className="scheme-wrapper">
                <div className="title">{scheme.title} -</div>
                <div className="description">{scheme.description}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
};

export default GovernmentScheme;