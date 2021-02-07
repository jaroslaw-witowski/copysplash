import { Modal } from "react-bootstrap";
import SVGLoader from "../svgloader/SVGLoader";
import "./verticalmodal.css";
import user from '../../assets/user.svg';
import locationPin from '../../assets/pin.svg';

const VerticalModal: React.FC<any> = ({ modalInfo, show, onHide }) => {
  const author = "Author";
  const location = "Location";

  return (
    modalInfo && (
      <Modal
        {...{ show, onHide }}
        dialogClassName={"primaryModal"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <div className="modal-header">
            <a href={modalInfo.user.links.html} target="./">
              <img
                className="modal-profil-picture"
                src={modalInfo.user.profile_image.medium}
                alt="profile"
              />
            </a>
            <div className="modal-author">
              <p className="modal-author-title">
              <SVGLoader imageAdress={user} alt={'modal-author-icon'} className={'modal-author-icon'}/>
                {author}
                </p>
              <p className="modal-profile-name">{modalInfo.user.name}</p>
            </div>
          </div>
          {modalInfo.user.location && (
            <div className="modal-location">
              <p className="modal-location-title">
                <SVGLoader imageAdress={locationPin} alt={'modal-location-icon'} className={'modal-location-icon'}/>
                {location}
              </p>
              <p className="modal-location-name">{modalInfo.user.location}</p>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <img
            className="modal-main-image"
            src={modalInfo.urls.regular}
            alt={modalInfo.alt_description}
          />
        </Modal.Body>
      </Modal>
    )
  );
};

export default VerticalModal;
