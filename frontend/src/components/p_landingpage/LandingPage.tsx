import "./landingPage.css";
import Searchbar from "../searchbar/Searchbar";

const LandingPage: React.FC<any> = ({
  setImageGallery,
  setSearchValue,
  searchValue,
  setDisplaySearchedValue
}) => {
  return (
    <div id="landing-page">
      <section className="landing-page">
        <h1 className="landing-page-header">Copysplash</h1>
        <main className="landing-page-content">
          <p className="landing-page-content-text text-part1">
            The internet’s source of{" "}
            <a
              className="landing-page-content-link"
              target="/"
              href="https://unsplash.com/"
            >
              freely-usable images
            </a>
            .
          </p>
          <p className="landing-page-content-text text-part2">
            Powered by creators everywhere
          </p>
        </main>
        <Searchbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setImageGallery={setImageGallery}
          setDisplaySearchedValue={setDisplaySearchedValue}
        />
      </section>
    </div>
  );
};

export default LandingPage;
