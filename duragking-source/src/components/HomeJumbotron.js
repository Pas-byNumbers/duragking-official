import { Jumbotron, Button } from 'react-bootstrap'

const HomeJumbotron = () => {
  return (
    <Jumbotron>
      <h1>Featured Message</h1>
      <p>
        This is the first bit of written content that users can see so put a strong welcome message or an eyecatching promotion here
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default HomeJumbotron;
