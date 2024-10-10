import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionMonthlyComponent } from './subscription-monthly.component';

describe('SubscriptionMonthlyComponent', () => {
  let component: SubscriptionMonthlyComponent;
  let fixture: ComponentFixture<SubscriptionMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
