import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LineChartComponent } from './sidebar/line-chart/line-chart.component';
import { NewSaleComponent } from './sidebar/new-sale/new-sale.component';
import { SalesComponent } from './sidebar/sales/sales.component';
import { ShoppingComponent } from './sidebar/shopping/shopping.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'line-chart' },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'new-sale', component: NewSaleComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'sales/new-sale', component: NewSaleComponent},
  { path: 'new-sale/sales', component: SalesComponent},
  { path: 'sales/new-sale/sales', component: SalesComponent}
];

// const routes: Routes = [
//   // { path: '', pathMatch: 'full', redirectTo: 'line-chart' },
//   { path: '', pathMatch: 'full', redirectTo: 'bubble-chart' },
//   { path: 'line-chart', component: LineChartComponent },
//   { path: 'bar-chart', component: BarChartComponent },
//   { path: 'doughnut-chart', component: DoughnutChartComponent },
//   { path: 'radar-chart', component: RadarChartComponent },
//   { path: 'pie-chart', component: PieChartComponent },
//   { path: 'bubble-chart', component: BubbleChartComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//-----------------------

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LineChartComponent } from './line-chart/line-chart.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
// import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
// import { RadarChartComponent } from './radar-chart/radar-chart.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

// const routes: Routes = [
//   // { path: '', pathMatch: 'full', redirectTo: 'line-chart' },
//   { path: '', pathMatch: 'full', redirectTo: 'bubble-chart' },
//   { path: 'line-chart', component: LineChartComponent },
//   { path: 'bar-chart', component: BarChartComponent },
//   { path: 'doughnut-chart', component: DoughnutChartComponent },
//   { path: 'radar-chart', component: RadarChartComponent },
//   { path: 'pie-chart', component: PieChartComponent },
//   { path: 'bubble-chart', component: BubbleChartComponent }
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
