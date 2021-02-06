import React, { useState, Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import "./searchbar.css";
import axios from "axios";
import {
  searchImages,
  searchbarInputSettings,
  emptySearchBarStyle,
  filledSearchBarStyle,
} from "./searchbarsettings";
import SVGLoader from "../../components/svgloader/SVGLoader";
import searchIcon from "../../assets/searchicons.svg";
import closeIcon from "../../assets/closeicon.svg";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLButtonElement>;

interface SearchbarProps {
  setImageGallery: Dispatch<SetStateAction<{}[]>>,
  setSearchValue: Dispatch<SetStateAction<string>>,
  searchValue: string,
  setDisplaySearchedValue?: Dispatch<SetStateAction<string>>,
  addictionalClassName?: string,
}

const Searchbar: React.FC <SearchbarProps>= ({
  setImageGallery,
  setSearchValue,
  searchValue,
  setDisplaySearchedValue,
  addictionalClassName
}) => {
  const history = useHistory();

  const {
    searchbarPlaceholder,
    searchbarInputMaxLenght,
  } = searchbarInputSettings;


  const [dynamicStyleChange, setDynamicStyleChange] = useState(
    emptySearchBarStyle
  );

  const handleInputChange = (event: InputEvent) => {
    setSearchValue(event.target.value);
    setDynamicStyleChange(filledSearchBarStyle);
  };

  const handleResetInput = () => {
    setSearchValue("");
    setDynamicStyleChange(emptySearchBarStyle);
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    axios.get(searchImages(searchValue.trim())).then((r) => {
      setImageGallery(r.data.results);
    });
    if(searchValue.length!==0){
      history.push("/searchresults");
    }

    if(setDisplaySearchedValue) {
      setDisplaySearchedValue(searchValue);
    }
  };

  return (
    <>
      <form id="searchbar" className={addictionalClassName}>
        <button
          onClick={handleSubmit}
          className="searchbar-submit-button"
          type="submit"
        >
          <SVGLoader
            className="searchbar-submit-button-icon"
            alt="searchbar-submit-button-icon"
            imageAdress={searchIcon}
          />
        </button>
        <input
          value={searchValue}
          onChange={handleInputChange}
          id="searchbar-input"
          type="text"
          placeholder={searchbarPlaceholder}
          maxLength={searchbarInputMaxLenght}
          style={dynamicStyleChange}
        />
        <button
          onClick={handleResetInput}
          className="searchbar-reset-button"
          type="reset"
        >
          {searchValue && (
            <SVGLoader
              className="searchbar-reset-button-icon"
              alt="searchbar-reset-button-icon"
              imageAdress={closeIcon}
            />
          )}
        </button>
      </form>
    </>
  );
};

export default Searchbar;
