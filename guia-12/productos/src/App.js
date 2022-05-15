import React, { Component } from 'react';
import './App.css';
//Agregando componente Productos
import Productos from './Components/Productos';
//Agregando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Productos</h1>
            <p class="lead">Estos productos son leídos desde un archivo json local.</p>
          </div>
        </div>
        <Productos></Productos>
      </div>
    );
  }
}

export default App;
