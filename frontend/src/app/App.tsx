import "./App.css";
import { useState } from "react";
import LandingPage from "../components/landingpage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageGallery from "../components/imagegallery/ImageGallery";

const App: React.FC = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <LandingPage
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setImageGallery={setImageGallery}
          />
        </Route>
        <Route path="/searchresults">
          <ImageGallery
            imageGallery={imageGallery}
            setImageGallery={setImageGallery}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Route>
      </Router>
    </div>
  );
};

export default App;
