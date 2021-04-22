import { ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";

const ContactContainer = () => {
  return (
    <div>
      <br />
      <div class="card">
        <div class="row no-gutters">
        <div>
      <br />
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>Address, Email, etc</Card.Text>
          <Button variant="primary">Open Email Form</Button>
        </Card.Body>
      </Card>
    </div>
          <div class="col">
            <div class="card-block px-2">
              <Card style={{ width: "50rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                  <Card.Img 
                  src="https://liveatnolan.com/wp-content/uploads/2018/06/Placeholder-Map.jpg"
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div class="card-footer w-100 text-muted">Footer</div>
      </div>
    </div>
  );
};

export default ContactContainer;
