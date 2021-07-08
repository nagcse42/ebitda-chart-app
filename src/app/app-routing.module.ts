import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyseDataComponent } from './analyse-data/analyse-data.component';
import { AppComponent } from './app.component';
import { HighChartEbitdaComponent } from './high-chart-ebitda/high-chart-ebitda.component';

const routes: Routes = [
  { path: 'analyseData', component: AnalyseDataComponent },
  { path: 'highChart', component: HighChartEbitdaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
