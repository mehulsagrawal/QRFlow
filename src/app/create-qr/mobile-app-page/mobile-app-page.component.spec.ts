import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppPageComponent } from './mobile-app-page.component';

describe('MobileAppPageComponent', () => {
  let component: MobileAppPageComponent;
  let fixture: ComponentFixture<MobileAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
