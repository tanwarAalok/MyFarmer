import './organic-page.styles.scss';
import { Link } from 'react-router-dom';

const OrganicPage = () => {
    return (
      <div className="organic-page-container">
        <h1>Organic Farming</h1>
        <div className="subheading">
          <p>
            Organic farming in India is an agrarian strategy that mainly
            involves utilizing organic information sources and diminishing the
            measure of synthetic substances. This includes no usage of growth
            hormones in any way that it brings decreased contamination and soil
            corruption. The scope of organic farming in India has been
            increasing day by day. Crop rotation, biological. 
            It largely excludes the use of synthetic inputs to the
            maximum extent feasible rely upon crop rotations, crop residues,
            animal manures, and biological system of nutrient mobilization and
            plant protection. The food we consume post-production becomes
            healthier and then gets the absolute fresh and natural things to
            eat.
            It aims to build up the soil’s nutrients. Efficient
            management of soil nutrients, soil structure, and soil biology must
            ensure good crop yields. Soil health is the main foundation of
            organic systems. Fertile soil will provide essential plant nutrients
            while supporting an active biotic community that helps the soil
            resists environmental degradation.
          </p>
        </div>
        <Link className="button" to="/organicFarming">
          Explore More
        </Link>

        {/* <button>Explore More</button> */}
      </div>
    );
};

export default OrganicPage;