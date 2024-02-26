import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcouponsComponent } from './postcoupons.component';

describe('PostcouponsComponent', () => {
  let component: PostcouponsComponent;
  let fixture: ComponentFixture<PostcouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcouponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
