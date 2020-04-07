import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingHomeComponent } from './selling-home.component';

describe('SellingHomeComponent', () => {
  let component: SellingHomeComponent;
  let fixture: ComponentFixture<SellingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
