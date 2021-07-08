import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyseDataComponent } from './analyse-data/analyse-data.component';
import { TestChartComponent } from './test-chart/test-chart.component';
import { HighChartEbitdaComponent } from './high-chart-ebitda/high-chart-ebitda.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyseDataComponent,
    TestChartComponent,
    HighChartEbitdaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
