import { Component } from '@angular/core';
import { Chart, ChartConfiguration } from "chart.js/auto";


const data: any = {
  labels: ["A", "B", "C"],
  datasets: [{
      data: [1,2,3]
  }],
};


const options: any = {
  scales: {
    x: {
      afterTickToLabelConversion: (tsplot: any) => {
        console.log(tsplot.ticks)
        tsplot.ticks = [];
        tsplot.ticks.push({ value: 1, label: "B"});
        tsplot.ticks.push({ value: 1.5, label: "B+"});
      }
    }
  }
};


const config: any = {
  data: data,
  type: "line",
  options: options,
};



@Component({
  selector: 'app-tsplot',
  templateUrl: './tsplot.component.html',
  styleUrls: ['./tsplot.component.scss']
})
export class TsplotComponent {
  
  chart: any = [];
  // constructor() {}

  ngOnInit() {
    this.chart = new Chart('tsplot', config);
  }

}
