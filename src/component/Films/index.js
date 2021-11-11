
import React from "react";
import {Button , Card} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

const Films = () => {
    return (

    <div className="App">
      <header className="App-header"> 
      <CardGroup>
  <Card  style={{color:"red"}, {margin:"13px"}}> 
    <Card.Img variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="350" width="250" alt="no image" />
    <Card.Body>
      <Card.Title>Movies Name</Card.Title>
      <Card.Text>
       Movies Description
      </Card.Text>
      <Button variant="danger">More</Button>
       <Button variant='light'>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Download 3 month ago</small>
    </Card.Footer>
  </Card>
  <Card  style={{color:"red"}}>
    <Card.Img variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="350" width="250" alt="no image"  />
    <Card.Body>
      <Card.Title>Movies Name</Card.Title>
      <Card.Text>
       Movies Description
      </Card.Text>
      <Button variant="danger">More</Button>
       <Button variant='light'>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Download 3 month ago</small>
    </Card.Footer>
  </Card>
  <Card  style={{color:"red"}}>
    <Card.Img variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="350" width="250" alt="no image"   />
    <Card.Body>
      <Card.Title>Movies Name</Card.Title>
      <Card.Text>
       Movies Description
      </Card.Text>
      <Button variant="danger">More</Button>
       <Button variant='light'>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Download 3 month ago</small>
    </Card.Footer>
  </Card>
  
</CardGroup>
      </header>
    </div>
  );

    };
export default Films;