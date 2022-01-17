import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  SalesNewSale = 0;

  constructor() { }
  ngOnInit(): void {
  }

  opcionSalesNewSale(value: number): void {
    this.SalesNewSale = value;
  }

  onMensajeHijo(mensaje: any) {
    //this.mensajeHijo=mensaje;
    //alert("msg H ->"+mensaje);
    this.SalesNewSale = 0;
   }
  

}// end : export class SalesComponent implements OnInit
