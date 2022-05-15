import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Estructura de datos a recibir para opciones
export const opciones = {
    texto: PropTypes.string,
    valor: PropTypes.string
};

class Selects extends Component {
    constructor(props) {
        //Recibir datos para componentes
        super(props);
        //Estado para capturar valor del input
        this.state = { ValorSelect: '' }
        this.Cambiar = this.Cambiar.bind(this);
        this.MostrarValor = this.MostrarValor.bind(this);
    }
    //Funciones para capturar datos del componente padre
    Cambiar(e) {
        this.setState({ ValorSelect: e.target.value });
    }
    //Para mostrar datos en componente padre
    MostrarValor() {
        return this.state.ValorSelect;
    }
    render() {
        return (
            <div>
                <label>{this.props.textlabel}</label>
                <select value={this.state.ValorSelect} onChange={this.Cambiar}>
                    <option value="" disabled>Seleccione</option>
                    {this.props.Options.map((opciones) =>
                        <option value={opciones.valor}>{opciones.texto}</option>
                    )}
                </select>
            </div>
        );
    }
}

Selects.protoType = {
    textlabel: PropTypes.string,
    Options: PropTypes.arrayOf(opciones)
}

export default Selects;