import './home.styles.scss';
import FrontPage from '../../components/front-page/front-page.component';
import OrganicPage from '../../components/organic-page/organic-page.component';
import SchemePage from '../../components/schemes-page/schemes-page.component';
import GotoTop from '../../utils/gotoTop';

const Home = () => {
    GotoTop();
    return (
        <div className="home-container">
            <FrontPage />
            <OrganicPage />
            <SchemePage />
        </div>
    )
};

export default Home;