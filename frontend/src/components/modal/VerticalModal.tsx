import { Modal } from "react-bootstrap";
import "./verticalmodal.css";

const VerticalModal: React.FC<any> = ({modalInfo, show, onHide}) => {
  const author = 'Author';


  return (
    modalInfo && (
      <Modal
        {...{show, onHide}}
        dialogClassName={"primaryModal"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}

      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href={modalInfo.user.links.html} target='./'>
              <img
                className="modal-profil-picture"
                src={modalInfo.user.profile_image.medium}
                alt="profile"
              />
            </a>
          </Modal.Title>
          <div className='modal-author'>
            <p className='modal-author-name'>{author}</p>
            <p className='modal-profile-name'>{modalInfo.user.name}</p>
          </div>
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
