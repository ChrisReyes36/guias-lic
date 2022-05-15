import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent implements OnInit {
  titulo = 'Calcular Sueldo';
  registro = [];
  contador: number;
  empleado: any;
  sueldoBase: number;
  sueldoBruto: number;
  iss: number;
  afp: number;
  salarioDesc: number;
  renta: number;
  sueladoBaseLim: number = 472.01;
  mensaje: string;

  constructor() { }

  ngOnInit() {
    this.iss = 0;
    this.afp = 0;
    this.sueldoBase;
    this.sueldoBruto = 0;
    this.salarioDesc = 0;
    this.contador = 0;
  }

  onCalcularSueldo() {
    if (this.sueldoBase <= 0) {
      this.mensaje = 'Digitó un sueldo no válido o debe digitar el sueldo'
    } else {
      this.iss = Math.round(this.sueldoBase * 0.073 * 100) / 100;
      this.afp = Math.round(this.sueldoBase * 0.051 * 10) / 100;
      this.salarioDesc = this.sueldoBase - this.iss - this.afp;
      //Validación de renta
      if (this.salarioDesc < this.sueladoBaseLim) {
        this.sueldoBruto = this.salarioDesc;
        this.salarioDesc = Math.round(this.salarioDesc * 100) / 100;
        this.renta = 0
      }
      else if (this.salarioDesc >= this.sueladoBaseLim) {
        this.salarioDesc = this.salarioDesc;
        this.renta = Math.round((this.salarioDesc - this.sueladoBaseLim) * 0.11 * 100) / 100;
        this.sueldoBruto = Math.round(this.salarioDesc - this.renta);
      }
      //Actualizar Tabla
      this.empleado = { "iss": this.iss, "afp": this.afp, "renta": this.renta, "sueldoBruto": this.sueldoBruto.toFixed(2) };
      this.registro.push(this.empleado);
      this.contador++;
      this.mensaje = ''
    }
  }
}
