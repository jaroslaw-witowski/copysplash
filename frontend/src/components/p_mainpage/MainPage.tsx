import Searchbar from "../searchbar/Searchbar";
import ImageGallery from "../imagegallery/ImageGallery";
import "./mainpage.css";

const MainPage: React.FC<any> = ({
  imageGallery,
  setImageGallery,
  searchValue,
  setSearchValue,
  displaySearchedValue,
  setDisplaySearchedValue,
}) => {
  return (
    <div id="main-page">
      <Searchbar
        setImageGallery={setImageGallery}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setDisplaySearchedValue={setDisplaySearchedValue}
        addictionalClassName='main-page-searchbar'
      />
      <p className="main-page-search-tag">
        {displaySearchedValue.charAt(0).toUpperCase() +
          displaySearchedValue.slice(1).toLowerCase()}
      </p>
      <ImageGallery imageGallery={imageGallery} />
    </div>
  );
};

export default MainPage;
