import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantapplicationComponent } from './merchantapplication.component';

describe('MerchantapplicationComponent', () => {
  let component: MerchantapplicationComponent;
  let fixture: ComponentFixture<MerchantapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
