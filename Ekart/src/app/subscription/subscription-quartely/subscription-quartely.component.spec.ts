import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionQuartelyComponent } from './subscription-quartely.component';

describe('SubscriptionQuartelyComponent', () => {
  let component: SubscriptionQuartelyComponent;
  let fixture: ComponentFixture<SubscriptionQuartelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionQuartelyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionQuartelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
