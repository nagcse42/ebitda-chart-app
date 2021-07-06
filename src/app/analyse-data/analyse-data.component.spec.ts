import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDataComponent } from './analyse-data.component';

describe('AnalyseDataComponent', () => {
  let component: AnalyseDataComponent;
  let fixture: ComponentFixture<AnalyseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
