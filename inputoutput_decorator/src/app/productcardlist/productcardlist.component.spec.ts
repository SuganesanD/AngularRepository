import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcardlistComponent } from './productcardlist.component';

describe('ProductcardlistComponent', () => {
  let component: ProductcardlistComponent;
  let fixture: ComponentFixture<ProductcardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
