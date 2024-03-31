import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieProductDetailsComponent } from './vie-product-details.component';

describe('VieProductDetailsComponent', () => {
  let component: VieProductDetailsComponent;
  let fixture: ComponentFixture<VieProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VieProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VieProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
