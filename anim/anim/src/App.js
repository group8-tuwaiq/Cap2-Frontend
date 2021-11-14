import logo from './logo.svg';
import './App.css';

import {Button ,Card,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
   
  
  <CardGroup >
  
<Card className="anim" style={{color:"red"},{margin: "13px"} }>
<Card.Img className="anim" variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="350" width="250" alt="no image" />
<Card.Body>
<Card.Title style={{color:"black"}}>Movies Name</Card.Title>
<Card.Text style={{color:"black"}}>
 Movies Description
</Card.Text>
<Button className="btn" style={{margin: "13px"}} variant="danger">More</Button>
 <Button className="btn" variant='light'>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Button>
</Card.Body>
<Card.Footer   style={{background:"#ce6363"},{color:"black"}}  >
<small   className="text-muted">Watch Now</small>
</Card.Footer>
</Card>

<Card className="anim" style={{margin: "13px"}}>
<Card.Img className="anim" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="350" width="250" alt="no image"    variant="top"  />

<Card.Body>
<Card.Title  style={{color:"black"}}>Tomorrowland </Card.Title>
<Card.Text style={{color:"red"}}>
Movies Description
</Card.Text>
<Button className="btn" style={{margin: "13px"}}  variant="danger">More</Button>
 <Button className="btn" variant='light'>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Button>
</Card.Body>
<Card.Footer>
<small className="text-muted">Watch Movie Now</small>
</Card.Footer>
</Card>
<Card className="anim" style={{color:"red"},{margin: "13px"}}>
<Card.Img className="anim" variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="350" width="250" alt="no image"   />
<Card.Body>
<Card.Title style={{color:"red"}}> Movies Name</Card.Title>
<Card.Text style={{color:"red"}}>
 Movies Description
</Card.Text>
<Button className="btn" style={{margin: "13px"}}  variant="danger">More</Button>
 <Button className="btn" variant='light'>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Button>
</Card.Body>
<Card.Footer>
<small className="text-muted">Watch Movie Now</small>
</Card.Footer>
</Card>


</CardGroup>

  );
}

export default App;
