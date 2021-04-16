import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const RegisterModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="email">Email: </label> <br />
          <input type="text" name="email"></input>
          <br />
          <label for="password">Password: </label> <br />
          <input type="password" name="password"></input>
          <br />
          <label for="conf-password">Confirm Password: </label> <br />
          <input type="password" name="conf-password"></input>
          <br />
          <label for="firstname">First Name: </label> <br />
          <input type="text" name="firstname"></input>
          <br />
          <label for="lastname">Last Name: </label> <br />
          <input type="text" name="lastname"></input>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
