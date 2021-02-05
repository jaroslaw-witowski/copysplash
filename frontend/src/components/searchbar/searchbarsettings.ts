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
