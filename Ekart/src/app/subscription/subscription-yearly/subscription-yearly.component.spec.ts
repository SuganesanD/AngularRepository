import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionYearlyComponent } from './subscription-yearly.component';

describe('SubscriptionYearlyComponent', () => {
  let component: SubscriptionYearlyComponent;
  let fixture: ComponentFixture<SubscriptionYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionYearlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
