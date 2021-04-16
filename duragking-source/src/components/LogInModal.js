import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const LogInModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="email">Email: </label> <br />
          <input type="text" name="email"></input>
          <br />
          <label for="password">Password: </label> <br />
          <input type="password" name="password"></input>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogInModal;
