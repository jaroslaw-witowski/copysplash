import "./landingPage.css";
import Searchbar from "../searchbar/Searchbar";

const LandingPage: React.FC<any> = ({
  setImageGallery,
  setSearchValue,
  searchValue,
}) => {
  return (
    <main id="main-section">
      <div className="main-page">
        <h1 className="main-page-header">Copysplash</h1>
        <div className="main-page-content">
          <p className="main-page-content-text text-part1">
            The internet’s source of{" "}
            <a
              className="main-page-content-link"
              target="/"
              href="https://unsplash.com/"
            >
              freely-usable images
            </a>
            .
          </p>
          <p className="main-page-content-text text-part2">
            Powered by creators everywhere
          </p>
        </div>
        <Searchbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setImageGallery={setImageGallery}
        />
      </div>
    </main>
  );
};

export default LandingPage;
