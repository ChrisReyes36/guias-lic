import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
    constructor(props) {
        //Recibir datos para componentes
        super(props);
        //Estado para capturar valores
        this.state = { textovalor: '' }
        //Haciendo escuchadores de eventos a traves de bind
        this.Cambiar = this.Cambiar.bind(this);
        this.MostrarValor = this.MostrarValor.bind(this);
    }
    //Funciones para capturar datos en componente padre
    Cambiar(e) {
        this.setState({ textovalor: e.target.value });
    }
    //Para mostrarlo en componente padre
    MostrarValor() {
        return this.state.textovalor;
    }
    render() {
        //Creacion de etiqueta input generica reutilizable en todo el proyecto
        return (
            <div>
                <label>{this.props.textolabel}</label>
                <input
                    type={this.props.tipoInput}
                    value={this.state.textovalor}
                    onChange={this.Cambiar}
                    required={this.props.esrequerido}
                />
            </div>
        );
    }
}
//Variables para trabajar con datos
Inputs.protoType = {
    textolabel: PropTypes.string,
    tipoInput: PropTypes.string,
    esrequerido: PropTypes.bool
}

export default Inputs;