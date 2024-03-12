import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcouponComponent } from './ucoupon.component';

describe('UcouponComponent', () => {
  let component: UcouponComponent;
  let fixture: ComponentFixture<UcouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UcouponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
