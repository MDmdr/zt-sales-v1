import { Component, OnInit } from '@angular/core';
import { ProductZt } from './productZt'; //??

import { SidebarComponent } from '../sidebar.component'; //??

import { EventEmitter, Input, Output } from '@angular/core';

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
    //alert("guardar venta zt: "+value);
    //SidebarComponent.opcionNewSale=0
    alert("¡ Venta almacenada! ");
    this.eventoHijo.emit("evento hijo!!!!, al enviar formulario");
  }

  /*---------------------------*/
  //productoZtModel = new ProductZt("", "" );

  // formProductSend(){
  //   alert("formProductSend save");    
  //   // SidebarComponent.rnewSale =0;
  //   // SidebarComponent._herokuProducts =0;    
  // }

  @Output()
  eventoHijo = new EventEmitter<string>();

  formProductSend(){
    //alert("enviar al component padre, y formProductSend save");
    alert("¡ Venta almacenada! ");
    // debe de guaradar o enviar a back end
    this.eventoHijo.emit("evento hijo!!!!, al enviar formulario");

    
  }
  


}//end - export class NewSaleComponent implements OnInit
