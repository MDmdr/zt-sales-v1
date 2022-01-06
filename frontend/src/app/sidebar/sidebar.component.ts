import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opcionSidebar: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSidebarOpcion(index: number): void {
    //index=5;
    console.log(index); // logging the index of the city in the browser console
    this.opcionSidebar = index;
   }

}//end class Side... OnInit

/*----------------------------------*/
