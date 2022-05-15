import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gasolina',
  templateUrl: './gasolina.component.html',
  styleUrls: ['./gasolina.component.css']
})
export class GasolinaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  titulo = 'Compra de Gasolina';
  montoPagar: any = 0;

  radioChangeHandler(event: any, cantidadGalones = 0) {
    this.montoPagar = ((cantidadGalones * 1) * (event.target.value) * 1).toFixed(2);
  }
}
