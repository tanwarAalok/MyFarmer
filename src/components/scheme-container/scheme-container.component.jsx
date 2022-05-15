import './scheme-container.styles.scss';

const SchemeContainer = ({ imageUrl, description }) => {
  return (
    <div className="government-scheme-container">
      <div className="imgbox">
        <img src={imageUrl} alt="" />
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SchemeContainer;