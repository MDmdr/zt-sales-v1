import { Component, OnInit } from '@angular/core';
import { HerokuappProductosService } from '../services/herokuapp-productos.service';

import { map } from 'rxjs/operators';

//import { chart } from 'chart.js';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opcionSidebar: number = 1;
  arrayH: any = [];
  //arrayH:string [] = [];
  newSale: number = 0;
  //public newSale: number = 0;

  constructor(
    private _herokuProducts: HerokuappProductosService
    ) { }

  ngOnInit(): void {
    this._herokuProducts.metodoHerokuappProducts().subscribe( (res: any) => console.log(res) );

    this._herokuProducts.metodoHerokuappProducts().subscribe( (res: any) => {
      // this.arrayH.push("dato x agregado","dato b agregado");
      // console.log(this.arrayH[0])
      // console.log(this.arrayH[1])
      // agregar el res json a arrayH push()      
      // console.log( res.length )
      // console.log( res[7].name )
      // console.log( res[7].price )
      // for (var val of res) {
      //   console.log( "Name: "+val.name );
      //   console.log( "Price: "+val.price );
      // }
      //------------------------------      
      
      this.arrayH = res;
      // console.log("----------------------------------------------");
      // console.log( this.arrayH );
      
      // for(var value of this.arrayH){
      //   console.log( value.name );
      //   console.log( value.price );
      // }
    } );
  }

  onSidebarOpcion(index: number): void {
    //index=5;
    console.log(index); // logging the index of the city in the browser console
    this.opcionSidebar = index;
   }

  opcionNewSale(value: number): void {
    console.log("opcionNewSale= " + value);
    this.newSale = value;
  }

  onMensajeHijo(mensaje: any) {
    //this.mensajeHijo=mensaje;
    //alert(mensaje);
    this.newSale = 0;
   }

   //----------------------------------------------------------------------------
   // Graphs-------------------------------------
   //let canvas = document.getElementById('canvas') as HTMLCanvasElement;
  //var ctx = document.getElementById('myChart');
  //ctx = document.getElementById('myChart');
  //ctx = document.getElementById('myChart') as HTMLCanvasElement;
  // eslint-disable-next-line no-unused-vars

  // canvas : any = document.getElementById("myChart");
  // ctx: any = this.canvas.getContext("2d");

  // myChart = new Chart(this.ctx, {
  //   type: 'line',
  //   data: {
  //     labels: [
  //       'Sunday',
  //       'Monday',
  //       'Tuesday',
  //       'Wednesday',
  //       'Thursday',
  //       'Friday',
  //       'Saturday'
  //     ],
  //     datasets: [{
  //       data: [
  //         15339,
  //         21345,
  //         18483,
  //         24003,
  //         23489,
  //         24092,
  //         12034
  //       ],
  //       //lineTension: 0,
  //       backgroundColor: 'transparent',
  //       borderColor: '#007bff',
  //       borderWidth: 4,
  //       pointBackgroundColor: '#007bff'
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: false
  //         }
  //       }]
  //     },
  //     legend: {
  //       display: false
  //     }
  //   }
  // }); //fin grafica
   //----------------------------------------------------------------------------
   //*/

}//end class Side... OnInit end???

/*----------------------------------*/
