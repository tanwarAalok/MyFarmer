import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";
import GovernmentScheme from "./routes/governement-scheme/governement-scheme.component";
import OrganicFarming from "./routes/organicFarming/organicFarming.component";
import Footer from "./components/footer/footer.component";

import Home from "./routes/home/home.component";

const Learn = () => {
  return (
    <div>
      <h1>Coming soon...</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Footer/>
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="schemes" element={<GovernmentScheme />} />
        <Route path="organicFarming" element={<OrganicFarming />} />
        <Route path="learn" element={<Learn />} />
      </Route>
    </Routes>
  );
}

export default App;
