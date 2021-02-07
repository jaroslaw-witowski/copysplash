import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./searchbar.css";
import axios from "axios";
import {
  searchImages,
  searchbarInputSettings,
  emptySearchBarStyle,
  filledSearchBarStyle,
} from "./searchbarsettings";
import { engineSerachData } from './searchbarEngineData';
import SVGLoader from "../../components/svgloader/SVGLoader";
import searchIcon from "../../assets/searchicons.svg";
import closeIcon from "../../assets/closeicon.svg";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLButtonElement>;

interface SearchbarProps {
  setImageGallery: Dispatch<SetStateAction<{}[]>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setDisplaySearchedValue?: Dispatch<SetStateAction<string>>;
  addictionalClassName?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({
  setImageGallery,
  setSearchValue,
  searchValue,
  setDisplaySearchedValue,
  addictionalClassName,
}) => {
  const {
    searchbarPlaceholder,
    searchbarInputMaxLenght,
    searchResultListLength,
  } = searchbarInputSettings;

  const history = useHistory();
  const [dynamicStyleChange, setDynamicStyleChange] = useState(
    emptySearchBarStyle
  );

  const [suggestions, setSuggestions] = useState<any>([]);
  const [noresults, setNoResults] = useState(true);
  const [chosenFromList, setChosenFromList] = useState(false);

  useEffect(() => {
    handleSubmit();
    setChosenFromList(false);
  }, [chosenFromList]);

  const handleInputChange = (event: InputEvent) => {
    setNoResults(true);
    let value = event.target.value;
    const regex = new RegExp(`^${value}`, "i");
    let suggestions: any[] = [];

    setSearchValue(value);
    setDynamicStyleChange(filledSearchBarStyle);

    if (value.length >= 3) {
      suggestions = engineSerachData.sort().filter((val) => regex.test(val));
      setSuggestions(suggestions);
    }
    if (value.length < 3) {
      setSuggestions([]);
    }
    if (suggestions.length === 0 && value.length >= 3) {
      setNoResults(false);
    }
  };

  const handleResetInput = () => {
    setSearchValue("");
    setSuggestions([]);
    setDynamicStyleChange(emptySearchBarStyle);
    setNoResults(true);
  };

  const handleSubmit = () => {
    axios.get(searchImages(searchValue.trim())).then((r) => {
      setImageGallery(r.data.results);
    });
    if (searchValue.length > 0) {
      history.push("/searchresults");
    }
    if (setDisplaySearchedValue) {
      setDisplaySearchedValue(searchValue);
    }
    setNoResults(true);
    setSuggestions([]);
  }

  const handleSubmitButton = (event: SubmitEvent) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <form id="searchbar" className={addictionalClassName}>
        <button
          onClick={handleSubmitButton}
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
        {suggestions.length !== 0 ? (
        <ul className="search-result">
          {suggestions.map((e: string, i: number) => {
            if(i>=searchResultListLength) return;
            return (

              <li
                key={i}
                className="search-result-item"
                onClick={() => {
                  setSearchValue(e);
                  setSuggestions([]);
                  setChosenFromList(true);
                }}
              >
                {e}
              </li>
            );
          })}
        </ul>
      ) : null}
      {!noresults && (
        <ul className="search-result ">
          <li className="search-result-item-no-result-disabled search-result-item">
            No results
          </li>
        </ul>
      )}
      </form>
      
    </>
  );
};

export default Searchbar;

