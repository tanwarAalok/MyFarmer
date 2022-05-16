import './government-scheme.styles.scss';
import SCHEMES from '../../utils/schemes.json';
import HINDI_SCHEMES from '../../utils/schemes_hindi.json'
import GoToTop from '../../utils/gotoTop';
import { useState } from 'react';

const GovernmentScheme = () => {
  GoToTop();
  const [toggle, setToggle] = useState(true);
  const [lang, setLang] = useState("Hindi");
  
  // toggle ? setLang("English") : setLang("Hindi");
  
  
    return (
      <div className="gov-container">
        <button
          onClick={() => {
            setToggle(!toggle);
            toggle ? setLang("English") : setLang("Hindi");
          }}
        >{`Read in ${lang}`}</button>
        <ol>
          {toggle
            ? SCHEMES.map((scheme) => (
                <li key={scheme.id}>
                  <div className="scheme-wrapper">
                    <div className="title">{scheme.title} -</div>
                    <div className="description">{scheme.description}</div>
                  </div>
                </li>
              ))
            : HINDI_SCHEMES.map((scheme) => (
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