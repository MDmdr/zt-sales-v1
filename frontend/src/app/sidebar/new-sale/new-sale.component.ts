import { Component, OnInit } from '@angular/core';
import { ProductZt } from './productZt'; //??

import { SidebarComponent } from '../sidebar.component'; //??

import { EventEmitter, Input, Output } from '@angular/core';

import { SalesComponent } from '../sales/sales.component';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  optionSaveSale(value: number): void {
    this.localS();
    //alert("guardar venta zt: "+value);
    //SidebarComponent.opcionNewSale=0
    alert("¡ Venta almacenada! ");
    this.eventoHijo.emit("evento hijo!!!!, al enviar formulario");
    this.valH.emit(1);
    //redirectTo: 'sales'
  }

  /*---------------------------*/
  productoZtModel = new ProductZt("", 0 );

  // formProductSend(){
  //   alert("formProductSend save");    
  //   // SidebarComponent.rnewSale =0;
  //   // SidebarComponent._herokuProducts =0;    
  // }

  @Output()
  eventoHijo = new EventEmitter<string>();

  @Output()
  valH = new EventEmitter<number>();

  formProductSend(){
    this.localS();
    //alert("enviar al component padre, y formProductSend save");
    alert("¡ Venta almacenada! ");
    // debe de guaradar o enviar a back end
    this.eventoHijo.emit("evento hijo!!!!, al enviar formulario");
    this.valH.emit(1);

    
  }

  localS(){
    localStorage.setItem('productoZt', JSON.stringify(this.productoZtModel));    
    var recuperar_xb = localStorage.getItem("productoZt");
    console.log("imprime" + recuperar_xb);
  }
  


}//end - export class NewSaleComponent implements OnInit
