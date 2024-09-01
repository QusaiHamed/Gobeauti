import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBeautyARComponent } from './go-beauty-ar.component';

describe('GoBeautyARComponent', () => {
  let component: GoBeautyARComponent;
  let fixture: ComponentFixture<GoBeautyARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoBeautyARComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoBeautyARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
