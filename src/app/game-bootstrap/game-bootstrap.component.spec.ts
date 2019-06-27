import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBootstrapComponent } from './game-bootstrap.component';

describe('GameBootstrapComponent', () => {
  let component: GameBootstrapComponent;
  let fixture: ComponentFixture<GameBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
