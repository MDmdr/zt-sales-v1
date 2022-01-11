import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HerokuappProductosService } from './services/herokuapp-productos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NewSaleComponent } from './sidebar/new-sale/new-sale.component';

import { FormsModule } from '@angular/forms';// <---- Importar FormsModule
//-----------------
//import { LineChartComponent } from '../line-chart/line-chart.component';
import { LineChartComponent } from './sidebar/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    NewSaleComponent,
    LineChartComponent //para la LineChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [HerokuappProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
