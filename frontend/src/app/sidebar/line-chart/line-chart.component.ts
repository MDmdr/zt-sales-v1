import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  lineChartData: ChartDataSets[] = [
    //{ data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
    { data: [85, 72, 78, 75, 77, 75], label: 'Ventas de productos' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      //backgroundColor: 'rgba(255,255,0,0.28)',
      backgroundColor: 'rgba(255, 153, 0, 0.60)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: any = 'line';
  
}