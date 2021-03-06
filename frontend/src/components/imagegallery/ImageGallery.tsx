import { useState, useEffect } from "react";
import "./imagegallery.css";
import VerticalModal from "../modal/VerticalModal";

const ImageGallery: React.FC<any> = ({ imageGallery }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState<any>(null);

  useEffect(() => {
    setModalShow(true);
  }, [modalInfo]);

  return (
    <div className="masonry-wrapper">
      <div className="masonry">
        {imageGallery.map((image: any) => {
          return (
            <button
              key={image.id}
              onClick={() => {
                setModalInfo(image);
              }}
              className="image-gallery-button-link masonry-item"
            >
                <img
                  className="masonry-content"
                  alt={image.alt_description}
                  src={image.urls.small}
                />
            </button>
          );
        })}
      </div>
      <VerticalModal
        modalInfo={modalInfo}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setModalInfo(null);
        }}
      />
    </div>
  );
};

export default ImageGallery;
