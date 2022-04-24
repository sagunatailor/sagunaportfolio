import react from 'react';
import { useState } from 'react';
import parse from "html-react-parser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function ModalComponent ({ showValue, content, title, image, screenshots}) {
  function handleShow() {
    setShow(true);
  }
  const [show, setShow] = useState(false);

    return (
      <>
      <Button className='button' onClick={() => handleShow(true)}>
          <figure><img alt={title} src={image} /></figure>
      </Button>
      <Modal show={showValue} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {parse(content)}
          {screenshots.map((image, idx) => (
            <figure key={idx}><img alt={title} src={image} /></figure>
          ))}
        </Modal.Body>
      </Modal>
      </>
    );
};

export default ModalComponent;