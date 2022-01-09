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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    NewSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HerokuappProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
