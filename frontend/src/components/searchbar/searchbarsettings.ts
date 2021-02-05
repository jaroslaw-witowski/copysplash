import { CSSProperties } from "react";

interface SearchbarInput {
  searchbarPlaceholder: string,
  searchbarInputMaxLenght: number,
}

export const searchbarInputSettings: SearchbarInput = {
  searchbarPlaceholder: "Search free high-resolution photos",
  searchbarInputMaxLenght: 100,
}

interface SearchingComponentParams {
  perPage: number,
  unsplahKeyAcces: string,
}

export const searchingSettings: SearchingComponentParams = {
  perPage: 30,
  unsplahKeyAcces: "qTU631YQpi_0Qacd04Bmj-JEzIkbLJjmCQ4TDF7TNnA",
};

const {perPage, unsplahKeyAcces} = searchingSettings;

export const searchImages = (searchedImage: string)  => {
  let URL = `https://api.unsplash.com/search/photos?page=1&query=${searchedImage}&per_page=${perPage}&client_id=${unsplahKeyAcces}`
  return URL;
};

export const emptySearchBarStyle: CSSProperties = {
  width: '100%',
  border: 'none',
  textIndent: '5px',
  background: 'white',
  borderRadius: '0px 5px 5px 0px',
  outline: 'none',
}

export const filledSearchBarStyle: CSSProperties = {
  width: '100%',
  border: 'none',
  textIndent: '5px',
  background: 'white',
  borderRadius: '0px',
  outline: 'none',
}

