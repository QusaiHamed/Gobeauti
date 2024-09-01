import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBeautyENComponent } from './go-beauty-en.component';

describe('GoBeautyENComponent', () => {
  let component: GoBeautyENComponent;
  let fixture: ComponentFixture<GoBeautyENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoBeautyENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoBeautyENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
