import logo from './logo.svg';
import './App.css';
import {Button ,Card,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      
<h1>Team Members </h1>

<CardGroup  >



      <Card  style={{color:"red"},{margin: "30px"} }>
      <Card.Img variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="400" width="160" alt="no image" />
    <Card.Body>
      <Card.Title style={{color:"black"}}>Name</Card.Title>
      <Card.Text style={{color:"black"}}>
        Description
      </Card.Text>
      </Card.Body>
  </Card>
 

    <Card  style={{color:"red"},{margin: "30px"} }>
      <Card.Img variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="400" width="160" alt="no image" />
    <Card.Body>
      <Card.Title style={{color:"black"}}>Name</Card.Title>
      <Card.Text style={{color:"black"}}>
        Description
      </Card.Text>
      </Card.Body>
  </Card>
 






      <Card  style={{color:"red"},{margin: "30px"} }>
      <Card.Img variant="top" src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg" height="400" width="160" alt="no image" />
    <Card.Body>
      <Card.Title style={{color:"black"}}>Name</Card.Title>
      <Card.Text style={{color:"black"}}>
        Description
      </Card.Text>
      </Card.Body>
     
  </Card>


</CardGroup>
      </header>
    </div>
  );
}

export default App;
