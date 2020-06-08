import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayservicesComponent } from './gatewayservices.component';

describe('GatewayservicesComponent', () => {
  let component: GatewayservicesComponent;
  let fixture: ComponentFixture<GatewayservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
