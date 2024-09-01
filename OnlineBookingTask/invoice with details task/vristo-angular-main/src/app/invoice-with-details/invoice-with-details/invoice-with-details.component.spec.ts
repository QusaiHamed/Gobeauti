import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceWithDetailsComponent } from './invoice-with-details.component';

describe('InvoiceWithDetailsComponent', () => {
  let component: InvoiceWithDetailsComponent;
  let fixture: ComponentFixture<InvoiceWithDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceWithDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceWithDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
