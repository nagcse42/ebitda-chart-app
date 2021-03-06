import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { scaleOrdinal } from 'd3-scale';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent implements OnInit {

  Data: any = [
    { Date: "2016-06-14", Categories: [{ Name: "Category1", Value: 368 }, { Name: "Category2", Value: 321 }, { Name: "Category3", Value: 524 }], LineCategory: [{ Name: "Line1", Value: 69 }, { Name: "Line2", Value: 63 }] },
    { Date: "2016-06-15", Categories: [{ Name: "Category1", Value: 521 }, { Name: "Category2", Value: 123 }, { Name: "Category3", Value: 653 }], LineCategory: [{ Name: "Line1", Value: 89 }, { Name: "Line2", Value: 96 }] },
    { Date: "2016-06-17", Categories: [{ Name: "Category1", Value: 368 }, { Name: "Category2", Value: 236 }, { Name: "Category3", Value: 537 }], LineCategory: [{ Name: "Line1", Value: 63 }, { Name: "Line2", Value: 35 }] },
    { Date: "2016-06-18", Categories: [{ Name: "Category1", Value: 423 }, { Name: "Category2", Value: 330 }, { Name: "Category3", Value: 689 }], LineCategory: [{ Name: "Line1", Value: 86 }, { Name: "Line2", Value: 45 }] },
    { Date: "2016-06-19", Categories: [{ Name: "Category1", Value: 601 }, { Name: "Category2", Value: 423 }, { Name: "Category3", Value: 490 }], LineCategory: [{ Name: "Line1", Value: 65 }, { Name: "Line2", Value: 63 }] },
    { Date: "2016-06-20", Categories: [{ Name: "Category1", Value: 412 }, { Name: "Category2", Value: 461 }, { Name: "Category3", Value: 321 }], LineCategory: [{ Name: "Line1", Value: 75 }, { Name: "Line2", Value: 85 }] }
  ];

  margin: any = { top: 20, right: 30, bottom: 60, left: 40 };
  width: any = 960 - this.margin.left - this.margin.right;
  height = 500 - this.margin.top - this.margin.bottom;
  textWidthHolder = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getTextWidth(text, fontSize, fontName) {
    let c = document.createElement("canvas");
    let ctx = c.getContext("2d");
    ctx.font = fontSize + ' ' + fontName;
    return ctx.measureText(text).width;
  }

  DataSegregator(array, on) {
    var SegData;
    let OrdinalPositionHolder = {
      valueOf: function () {
        let thisObject = this;
        let keys = Object.keys(thisObject);
        keys.splice(keys.indexOf("valueOf"), 1);
        keys.splice(keys.indexOf("keys"), 1);
        // return keys.length == 0 ? -1 : d3.max(keys, function (d) { return thisObject[d] })
      }
      , keys: function () {
        let thisObject = this;
        let keys = Object.keys(thisObject);
        keys.splice(keys.indexOf("valueOf"), 1);
        keys.splice(keys.indexOf("keys"), 1);
        return keys;
      }
    }
    array[0].map(function (d) { return d[on] }).forEach(function (b) {
      let value = OrdinalPositionHolder.valueOf();
      //OrdinalPositionHolder[b] = OrdinalPositionHolder > -1 ? ++value : 0;
    })

    SegData = OrdinalPositionHolder.keys().map(function () {
      return [];
    });

    array.forEach(function (d) {
      d.forEach(function (b) {
        SegData[OrdinalPositionHolder[b[on]]].push(b);
      })
    });

    return SegData;
  }


  // renderChart() {

  //   /// Adding Date in LineCategory
  //   Data.forEach(function (d) {
  //     d.LineCategory.forEach(function (b) {
  //       b.Date = d.Date;
  //     })
  //   });


  //   var Categories = new Array();
  //   // Extension method declaration

  //   var Data;
  //   var ageNames;

  //   var x0 = d3.select("");

  //   var x0 = d3.scale.ordinal()
  //     .rangeRoundBands([0, this.width], .1);
  //   var XLine = d3.scale.ordinal()
  //     .rangeRoundPoints([0, this.width], .1);
  //   var x1 = d3.scale.ordinal();

  //   var y = d3.scale.linear()
  //     .range([this.height, 0]);

  //   var YLine = d3.scale.linear().range([this.height, 0])
  //     .domain([0, d3.max(Data, function (d) { return d3.max(d.LineCategory, function (b) { return b.Value }) })]);

  //   var color = d3.scale.ordinal()
  //     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  //   var line = d3.svg.line().x(function (d) {
  //     return x0(d.Date) + x0.rangeBand() / 2;
  //   }).y(function (d) { return YLine(d.Value) });




  //   var xAxis = d3.svg.axis()
  //     .scale(x0)
  //     .orient("bottom");

  //   var yAxis = d3.svg.axis()
  //     .scale(y)
  //     .orient("left")
  //     .tickFormat(d3.format(".2s"));

  //   var YLeftAxis = d3.svg.axis().scale(YLine).orient("right").tickFormat(d3.format(".2s"));

  //   var svg = d3.select("body").append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //     .append("g")
  //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");





  //   // Bar Data categories
  //   Data.forEach(function (d) {
  //     d.Categories.forEach(function (b) {
  //       if (Categories.findIndex(function (c) { return c.Name === b.Name }) == -1) {
  //         b.Type = "bar";
  //         console.log(JSON.stringify(b))
  //         Categories.push(b)
  //       }
  //     })
  //   });


  //   // Line Data categories
  //   Data.forEach(function (d) {
  //     d.LineCategory.forEach(function (b) {
  //       if (Categories.findIndex(function (c) { return c.Name === b.Name }) == -1) {
  //         b.Type = "line";
  //         console.log(JSON.stringify(b))
  //         Categories.push(b)
  //       }
  //     })
  //   });

  //   // Processing Line data
  //   let lineData = this.DataSegregator(Data.map(function (d) { return d.LineCategory }), "Name");

  //   // Line Coloring
  //   LineColor = d3.scale.ordinal();
  //   LineColor.domain(Categories.filter(function (d) { return d.Type == "line" }).map(function (d) { return d.Name }));
  //   LineColor.range(["#d40606", "#06bf00", "#98bdc5", "#671919", "#0b172b"])
  //   x0.domain(Data.map(function (d) { return d.Date; }));
  //   XLine.domain(Data.map(function (d) { return d.Date; }));
  //   x1.domain(Categories.filter(function (d) { return d.Type == "bar" }).map(function (d) { return d.Name })).rangeRoundBands([0, x0.rangeBand()]);
  //   y.domain([0, d3.max(Data, function (d) { return d3.max(d.Categories, function (d) { return d.Value; }); })]);

  //   svg.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(xAxis);

  //   svg.append("g")
  //     .attr("class", "y axis")
  //     .attr("transform", "translate(" + (width) + ",0)")
  //     .call(YLeftAxis)

  //     .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", -10)

  //     .attr("dy", ".71em")
  //     .style("text-anchor", "end")
  //     .text("Percent");

  //   svg.append("g")
  //     .attr("class", "y axis")
  //     .call(yAxis)
  //     .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", ".71em")
  //     .style("text-anchor", "end")
  //     .text("Population");


  //   var state = svg.selectAll(".state")
  //     .data(Data)
  //     .enter().append("g")
  //     .attr("class", "state")
  //     .attr("transform", function (d) { return "translate(" + x0(d.Date) + ",0)"; });

  //   state.selectAll("rect")
  //     .data(function (d) { return d.Categories; })
  //     .enter().append("rect")
  //     .attr("width", x1.rangeBand())
  //     .attr("x", function (d) { return x1(d.Name); })
  //     .attr("y", function (d) { return y(d.Value); })
  //     //.attr("height", function (d) { return height - y(d.Value); })
  //     .style("fill", function (d) { return color(d.Name); })
  //     .transition().delay(500).attrTween("height", function (d) {
  //       var i = d3.interpolate(0, height - y(d.Value));
  //       return function (t) {
  //         return i(t);
  //       }
  //     });

  //   // drawaing lines
  //   svg.selectAll(".lines").data(lineData).enter().append("g").attr("class", "line")
  //     .each(function (d) {
  //       let Name = d[0].Name
  //       d3.select(this).append("path").attr("d", function (b) { return line(b) }).style({ 'stroke-width': "2px", "fill": "none" }).style("stroke", LineColor(Name)).transition().duration(1500);
  //     })


  //   // Legends

  //   var LegendHolder = svg.append("g").attr("class", "legendHolder");
  //   var legend = LegendHolder.selectAll(".legend")
  //     .data(Categories.map(function (d) { return { "Name": d.Name, "Type": d.Type } }))
  //     .enter().append("g")
  //     .attr("class", "legend")
  //     .attr("transform", function (d, i) { return "translate(0," + (this.height + this.margin.bottom / 2) + ")"; })
  //     .each(function (d, i) {
  //       //  Legend Symbols


  //       d3.select(this).append("rect")
  //         .attr("width", function () { return 18 })
  //         .attr("x", function (b) {

  //           left = (i + 1) * 15 + i * 18 + i * 5 + textWidthHolder;
  //           return left;
  //         })
  //         .attr("y", function (b) { return b.Type == 'bar' ? 0 : 7 })
  //         .attr("height", function (b) { return b.Type == 'bar' ? 18 : 5 })
  //         .style("fill", function (b) { return b.Type == 'bar' ? color(d.Name) : LineColor(d.Name) });

  //       //  Legend Text

  //       d3.select(this).append("text")
  //         .attr("x", function (b) {

  //           left = (i + 1) * 15 + (i + 1) * 18 + (i + 1) * 5 + textWidthHolder;

  //           return left;
  //         })
  //         .attr("y", 9)
  //         .attr("dy", ".35em")
  //         .style("text-anchor", "start")
  //         .text(d.Name);

  //       textWidthHolder += getTextWidth(d.Name, "10px", "calibri");
  //     });


  //   // Legend Placing

  //   d3.select(".legendHolder").attr("transform", function (d) {
  //     thisWidth = d3.select(this).node().getBBox().width;
  //     return "translate(" + ((width) / 2 - thisWidth / 2) + ",0)";
  //   })

  // }

}
