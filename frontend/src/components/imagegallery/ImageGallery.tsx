import "./imagegallery.css";
import Searchbar from "../searchbar/Searchbar";

const ImageGallery: React.FC<any> = ({
  imageGallery,
  setImageGallery,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="masonry-wrapper">
      <Searchbar
        imageGallery={imageGallery}
        setImageGallery={setImageGallery}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="masonry">
        {imageGallery.map((image: any) => {
          return (
            <a
              key={image.id}
              href={`imageGallery/${image.id}`}
              className="image-gallery-link"
            >
              <div className="masonry-item">
                <img
                  className="masonry-content"
                  alt={image.alt_description}
                  src={image.urls.small}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
