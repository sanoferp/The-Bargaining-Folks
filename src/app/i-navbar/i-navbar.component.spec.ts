import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INavbarComponent } from './i-navbar.component';

describe('INavbarComponent', () => {
  let component: INavbarComponent;
  let fixture: ComponentFixture<INavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
