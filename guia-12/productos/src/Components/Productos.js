import React, { Component } from 'react';
//Agregamos referencia al archivo json
import ListaProductos from '../Data/productos.json';
import Card from './Card';
class Productos extends Component {
    render() {
        //Recorrido del json para mostrar los datos en componente Card
        return (
            <div className="row">
                {ListaProductos.map((ProductosDetalle, index) => (
                    <Card
                        MarcaProducto={ProductosDetalle.value.marca}
                        NombreProducto={ProductosDetalle.value.nombre}
                        PresentacionProducto={ProductosDetalle.value.presentacion}
                    />
                ))}
            </div>
        );
    }
}

export default Productos;