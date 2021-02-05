import React, { useState } from "react";
import axios from "axios";
import {
  searchImages,
  searchbarInputSettings,
} from "./searchbarsettings";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLButtonElement>;

const Searchbar: React.FC = () => {

  const {
    searchbarPlaceholder,
    searchbarInputMaxLenght,
  } = searchbarInputSettings;

  const [searchValue, setSearchValue] = useState("");
  const [imageGallery, setImageGallery] = useState([]);

  const handleInputChange = (event: InputEvent) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    axios.get(searchImages(searchValue.trim())).then((r) => {
      setImageGallery(r.data.results);
    });

  };

  return (
    <>
      <form id="searchbar">
        <button
          onClick={handleSubmit}
          className="searchbar-submit-button"
          type="submit"
        >
        </button>
        <input
          onChange={handleInputChange}
          id="searchbar-input"
          type="text"
          placeholder={searchbarPlaceholder}
          maxLength={searchbarInputMaxLenght}
        />
      </form>
    </>
  );
};

export default Searchbar;
