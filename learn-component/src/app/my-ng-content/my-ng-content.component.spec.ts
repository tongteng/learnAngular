import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgContentComponent } from './my-ng-content.component';

describe('MyNgContentComponent', () => {
  let component: MyNgContentComponent;
  let fixture: ComponentFixture<MyNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
