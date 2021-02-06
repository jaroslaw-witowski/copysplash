import "./App.css";
import { useState } from "react";
import LandingPage from "../components/p_landingpage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../components/p_mainpage/MainPage";

const App: React.FC = () => {
  const [imageGallery, setImageGallery] = useState<{}[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [displaySearchedValue, setDisplaySearchedValue] = useState<string>("");

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <LandingPage
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setImageGallery={setImageGallery}
            setDisplaySearchedValue={setDisplaySearchedValue}
          />
        </Route>
        <Route path="/searchresults">
          <MainPage
            imageGallery={imageGallery}
            setImageGallery={setImageGallery}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            displaySearchedValue={displaySearchedValue}
            setDisplaySearchedValue={setDisplaySearchedValue}
          />
        </Route>
      </Router>
    </div>
  );
};

export default App;
