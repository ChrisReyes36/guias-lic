import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';

class Carta extends Component {
  render() {
    return (
      <Card className="card col-sm-4">
        <Card.Header>{this.props.MarcaProducto}</Card.Header>
        <Container>
          <Card.Title>{this.props.NombreProducto}</Card.Title>
          <Card.Text>{this.props.PresentacionProducto}</Card.Text>
        </Container>
      </Card>
    );
  }
}

Carta.protoType = {
  MarcaProducto: ProtoTypes.string,
  NombreProducto: ProtoTypes.string,
  PresentacionProducto: ProtoTypes.string
}

export default Carta;