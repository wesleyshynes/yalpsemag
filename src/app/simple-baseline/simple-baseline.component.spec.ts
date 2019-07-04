import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBaselineComponent } from './simple-baseline.component';

describe('SimpleBaselineComponent', () => {
  let component: SimpleBaselineComponent;
  let fixture: ComponentFixture<SimpleBaselineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBaselineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
