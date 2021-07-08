import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'high-chart-ebitda',
  templateUrl: './high-chart-ebitda.component.html',
  styleUrls: ['./high-chart-ebitda.component.css']
})
export class HighChartEbitdaComponent implements OnInit {

  chartData: any = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}°C',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: 'Rainfall',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value} mm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
    },
    series: [{
      name: 'Rainfall',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' mm'
      }

    }, {
      name: 'Temperature',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: '°C'
      }
    }]
  };

  mutliChartData: any = {
    chart: {},
    title: {
      text: 'EBITDA Consolidated view'
    },
    plotOptions: {
      column: {
        groupPadding: .05
      }
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      gridLineWidth: 0
    }, {
      categories: ['n1', 'n2', 'n3', 'e1', 'e2', 'e3', 'w1', 'w2', 'w3', 's1', 's2', 's3'],
      opposite: true,
      labels: {
        enabled: false
      }
    }],
    yAxis: [
      { // Primary yAxis
        gridLineWidth: 0,
        labels: {
          style: {
            color: '#89A54E'
          }
        },
        title: {
          text: 'Budget',
          style: {
            color: '#89A54E'
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: 'Actual %',
          style: {
            color: Highcharts.getOptions().colors[3]
          }
        },
        labels: {
          style: {
            color: '#4572A7'
          }
        },
        opposite: true
      }],
    tooltip: {
      formatter: function () {
        var s;
        if (this.point.name) { // the pie chart
          s = '' + this.point.name + ': ' + this.y;
        } else {
          s = '' + this.x + ': ' + this.y;
        }
        return s;
      }
    },
    labels: {
      items: [{
        html: '',
        style: {
          left: '40px',
          top: '8px',
          color: 'black'
        }
      }]
    },
    series: [
      // Yearly Data
      {
        type: 'column',
        name: '2021 Actual',
        data: [10000, 25000, 5000, 1200, 89000, 12345, 10000, 25000, 5000, 1200, 89000, 12345],
        color: '#212954'
      }, {
        type: 'column',
        name: '2020 Actual',
        data: [10111, 25111, 5111, 1311, 89111, 12456, 10111, 25111, 5111, 1311, 89111, 12456],
        color: '#8592d4'
      },
      {
        type: 'column',
        name: '2021 Budget',
        data: [8889, 23889, 3889, 89, 87889, 11234, 8889, 23889, 3889, 89, 87889, 11234],
        color: 'pink'
      },

      // Line Chart
      {
        type: 'spline',
        name: 'Actual %',
        yAxis: 1,
        xAxis: 1,
        data: [20, 30, 40, 35, 45, 55, 45, 35, 50, 33, 42, 55],
        /* Profit % for Black, BW Print and Fashion
        For North, ->   20, 30, 40 % 
        For East ->     35, 45, 55% 
        For West ->     45, 35, 50% 
        Four South ->   33, 42, 55% 
        */
        color: '#212954',
        marker: {
          lineWidth: 1,
          lineColor: '#212954',
          fillColor: '#212954'
        }
      },
      {
        type: 'spline',
        name: 'Budget %',
        yAxis: 1,
        xAxis: 1,
        data: [22, 40, 50, 35, 85, 15, 35, 35, 40, 33, 42, 55],
        /* Profit % for Black, BW Print and Fashion
        For North, ->   20, 30, 40 % 
        For East ->     35, 45, 55% 
        For West ->     45, 35, 50% 
        Four South ->   33, 42, 55% 
        */
        color: '#8592d4',
        marker: {
          lineWidth: 1,
          lineColor: '#8592d4',
          fillColor: '#8592d4'
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    //Highcharts.chart('container', this.chartData);
    Highcharts.chart('container', this.mutliChartData);
  }

}
