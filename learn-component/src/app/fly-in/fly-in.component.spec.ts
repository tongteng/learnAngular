import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyInComponent } from './fly-in.component';

describe('FlyInComponent', () => {
  let component: FlyInComponent;
  let fixture: ComponentFixture<FlyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
