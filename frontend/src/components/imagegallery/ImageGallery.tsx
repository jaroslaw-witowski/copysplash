import "./imagegallery.css";

const ImageGallery: React.FC<any> = ({ imageGallery }) => {
  return (
    <div className="masonry-wrapper">
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
