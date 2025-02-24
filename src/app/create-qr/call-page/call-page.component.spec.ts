import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPageComponent } from './call-page.component';

describe('CallPageComponent', () => {
  let component: CallPageComponent;
  let fixture: ComponentFixture<CallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
