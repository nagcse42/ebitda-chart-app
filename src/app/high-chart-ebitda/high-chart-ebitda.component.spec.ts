import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartEbitdaComponent } from './high-chart-ebitda.component';

describe('HighChartEbitdaComponent', () => {
  let component: HighChartEbitdaComponent;
  let fixture: ComponentFixture<HighChartEbitdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighChartEbitdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartEbitdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
