import "./verticalmodal.css";

const VerticalModal: React.FC<any> = (props) => {
  console.log(props.modalInfo);

  return (
    props.modalInfo && (
      <div
        dialogClassName={"primaryModal"}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <img
            className="modal-main-image"
            src={props.modalInfo.urls.regular}
            alt={props.modalInfo.alt_description}
          />
        <div id='modal-header'>
            <a href={props.modalInfo.user.links.html} target='./'>
              <img
                className="modal-profil-picture"
                src={props.modalInfo.user.profile_image.medium}
                alt="profile"
              />
            </a>
            <p>{props.modalInfo.user.name}</p>
            <button onClick={props.onHide} />
        </div>
        <div className='modal-body'>
         
        </div>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </div>
    )
  );
};

export default VerticalModal;
