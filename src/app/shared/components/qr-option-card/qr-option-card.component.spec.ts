import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrOptionCardComponent } from './qr-option-card.component';

describe('QrOptionCardComponent', () => {
  let component: QrOptionCardComponent;
  let fixture: ComponentFixture<QrOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrOptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
