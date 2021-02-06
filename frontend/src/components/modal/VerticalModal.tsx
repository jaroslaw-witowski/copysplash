import { Modal, Button } from "react-bootstrap";
import "./verticalmodal.css";

const VerticalModal: React.FC<any> = (props) => {
  console.log(props.modalInfo);
  const author = 'Author';

  return (
    props.modalInfo && (
      <Modal
        dialogClassName={"primaryModal"}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href={props.modalInfo.user.links.html} target='./'>
              <img
                className="modal-profil-picture"
                src={props.modalInfo.user.profile_image.medium}
                alt="profile"
              />
            </a>
          </Modal.Title>
          <div className='modal-author'>
            <p className='modal-author-name'>{author}</p>
            <p className='modal-profile-name'>{props.modalInfo.user.name}</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <img
            className="modal-main-image"
            src={props.modalInfo.urls.regular}
            alt={props.modalInfo.alt_description}
          />
        </Modal.Body>
      </Modal>
    )
  );
};

export default VerticalModal;
