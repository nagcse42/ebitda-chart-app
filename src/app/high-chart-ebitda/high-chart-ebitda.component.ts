import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { editdaData } from '../analyse-data/editda_data';


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
  fromPeriods: any = [];
  toPeriods: any = [];
  years: any = [];
  startMnthIndex = 0;
  endMnthIndex = 11;
  fromMonth: string = "January";
  toMonth: string = "December";
  userInfo: string = '';

  MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
      categories: this.SHORT_MONTHS,
      gridLineWidth: 0
    }, {
      categories: this.SHORT_MONTHS,
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
            color: 'black'
          }
        },
        title: {
          text: 'Budget',
          style: {
            color: 'black'
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: 'Actual',
          style: {
            color: Highcharts.getOptions().colors[3]
          }
        },
        labels: {
          style: {
            color: 'black'
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
        name: '2020 Actual',
        data: [10000, 25000, 5000, 1200, 89000, 12345, 10000, 25000, 5000, 1200, 89000, 12345],
        color: '#212954'
      }, {
        type: 'column',
        name: '2019 Actual',
        data: [10111, 25111, 5111, 1311, 89111, 12456, 10111, 25111, 5111, 1311, 89111, 12456],
        color: '#8592d4'
      },
      {
        type: 'column',
        name: '2020 Budget',
        data: [8889, 23889, 3889, 89, 87889, 11234, 8889, 23889, 3889, 89, 87889, 11234],
        color: 'pink'
      },

      // Line Chart
      {
        type: 'spline',
        name: 'YTD 2020',
        yAxis: 1,
        xAxis: 1,
        data: [20, 30, 40, 35, 45, 55, 45, 35, 50, 33, 42, 55],
        color: '#212954',
        marker: {
          lineWidth: 1,
          lineColor: '#212954',
          fillColor: '#212954'
        }
      },
      {
        type: 'spline',
        name: 'YTD 2019',
        yAxis: 1,
        xAxis: 1,
        data: [22, 40, 50, 35, 85, 15, 35, 35, 40, 33, 42, 55],
        color: '#8592d4',
        marker: {
          lineWidth: 1,
          lineColor: '#8592d4',
          fillColor: '#8592d4'
        }
      },
      {
        type: 'spline',
        name: 'YTD Budget',
        yAxis: 1,
        xAxis: 1,
        data: [60, 70, 80, 90, 100, 105, 115, 125, 130, 135, 145, 155],
        color: 'pink',
        marker: {
          lineWidth: 1,
          lineColor: 'pink',
          fillColor: 'pink'
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    //Highcharts.chart('container', this.chartData);
    this.fromPeriods = this.MONTHS;
    this.toPeriods = this.MONTHS;

    if (editdaData && editdaData.length > 0) {
      this.processData();
    }
  }

  processData() {
    let seriesData: any = [
      // Yearly Data
      {
        type: 'column',
        name: '2020 Actual',
        data: [],
        color: '#212954'
      },
      {
        type: 'column',
        name: '2019 Actual',
        data: [],
        color: '#8592d4'
      },
      {
        type: 'column',
        name: '2020 Budget',
        data: [],
        color: 'pink'
      },
      // Line Chart
      {
        type: 'spline',
        name: 'YTD 2020',
        yAxis: 1,
        xAxis: 1,
        data: [],
        color: '#212954',
        marker: {
          lineWidth: 1,
          lineColor: '#212954',
          fillColor: '#212954'
        }
      },
      {
        type: 'spline',
        name: 'YTD 2019',
        yAxis: 1,
        xAxis: 1,
        data: [],
        color: '#8592d4',
        marker: {
          lineWidth: 1,
          lineColor: '#8592d4',
          fillColor: '#8592d4'
        }
      },
      {
        type: 'spline',
        name: 'YTD Budget',
        yAxis: 1,
        xAxis: 1,
        data: [],
        color: 'pink',
        marker: {
          lineWidth: 1,
          lineColor: 'pink',
          fillColor: 'pink'
        }
      }
    ];

    for (let data of editdaData) {
      for (let index = 0; index < seriesData.length; index++) {
        let seriesDataItem = seriesData[index];
        let monthIndex = this.MONTHS.indexOf(data.MONTH);
        this.years.indexOf(data.YEAR) === -1 ? this.years.push(data.YEAR) : '';

        switch (seriesDataItem.name) {
          case 'YTD Budget':
            if (seriesDataItem.data && !!seriesDataItem.data[monthIndex]) {
              seriesDataItem.data[monthIndex] = seriesDataItem.data[monthIndex] + data.YTDbudget;
            } else {
              seriesDataItem.data.push(data.YTDbudget);
            }
            break;
          case 'YTD 2019':
            if (seriesDataItem.data && !!seriesDataItem.data[monthIndex]) {
              seriesDataItem.data[monthIndex] = seriesDataItem.data[monthIndex] + data.py_ytd_actual;
            } else {
              seriesDataItem.data.push(data.py_ytd_actual);
            }
            break;
          case 'YTD 2020':
            if (seriesDataItem.data && !!seriesDataItem.data[monthIndex]) {
              seriesDataItem.data[monthIndex] = seriesDataItem.data[monthIndex] + data.YTDactual;
            } else {
              seriesDataItem.data.push(data.YTDactual);
            }
            break;
          case '2020 Budget':
            if (seriesDataItem.data && !!seriesDataItem.data[monthIndex]) {
              seriesDataItem.data[monthIndex] = seriesDataItem.data[monthIndex] + data.MTDbudget;
            } else {
              seriesDataItem.data.push(data.MTDbudget);
            }
            break;
          case '2020 Actual':
            if (seriesDataItem.data && !!seriesDataItem.data[monthIndex]) {
              seriesDataItem.data[monthIndex] = seriesDataItem.data[monthIndex] + data.MTDactual;
            } else {
              seriesDataItem.data.push(data.MTDactual);
            }
            break;
          case '2019 Actual':
            if (seriesDataItem.data && !!seriesDataItem.data[monthIndex]) {
              seriesDataItem.data[monthIndex] = seriesDataItem.data[monthIndex] + data.py_mtd_actual;
            } else {
              seriesDataItem.data.push(data.py_mtd_actual);
            }
            break;
          default: break;
        }
        seriesData[index] = seriesDataItem;
      }
    }

    console.log("Series Data : " + seriesData);
    if (this.startMnthIndex != 0 || this.endMnthIndex != 11) {
      seriesData = this.getFilteredSeries(seriesData);
      this.mutliChartData.xAxis[0].categories = this.SHORT_MONTHS.slice(this.startMnthIndex, this.endMnthIndex + 1);
      this.mutliChartData.xAxis[1].categories = this.SHORT_MONTHS.slice(this.startMnthIndex, this.endMnthIndex + 1);
    }

    this.mutliChartData.series = seriesData;
    Highcharts.chart('container', this.mutliChartData);
  }

  getFilteredSeries(seriesData: any) {
    if (seriesData && seriesData.length > 0) {
      for (let seriesIndx = 0; seriesIndx < seriesData.length; seriesIndx++) {
        let seriesDataItem = seriesData[seriesIndx];
        if (seriesDataItem.data && seriesDataItem.data.length > 0) {
          seriesDataItem.data = seriesDataItem.data.slice(this.startMnthIndex, this.endMnthIndex + 1);
          seriesData[seriesIndx] = seriesDataItem;
        }
      }
    }

    return seriesData;
  }

  fromPeriodChange(event: any) {
    this.startMnthIndex = this.MONTHS.indexOf(this.fromMonth);
    this.checkAndAlertUserInfo();
  }

  toPeriodChange(event: any) {
    this.endMnthIndex = this.MONTHS.indexOf(this.toMonth);
    this.checkAndAlertUserInfo();
  }

  analyzeData() {
    this.startMnthIndex = this.MONTHS.indexOf(this.fromMonth);
    this.endMnthIndex = this.MONTHS.indexOf(this.toMonth);
    this.checkAndAlertUserInfo();
    if (this.checkAndAlertUserInfo()) {
      this.processData();
    }
  }

  checkAndAlertUserInfo() {
    if (this.startMnthIndex >= this.endMnthIndex) {
      this.userInfo = 'To period should be greater then From period';
      return false;
    } else {
      this.userInfo = '';
      return true;
    }
  }

  isUserInfoAvailable() {
    return !this.userInfo;
  }
}
