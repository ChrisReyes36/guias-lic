import React, { Component } from 'react';
import './App.css';
//Agregando componente Productos
import Productos from './Components/Productos';
//Agregando bootstrap
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Container className="jumbotron jumbotron-fluid">
          <Container>
            <Card.Title className="display-4">Productos</Card.Title>
            <Card.Text className="lead">Estos productos son leídos desde un archivo json local.  </Card.Text>
          </Container>
        </Container>
        <Productos></Productos>
      </Container>

    );
  }
}

export default App;