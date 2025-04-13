import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtoContactUsAirplaneComponent } from './cto-contact-us-airplane.component';

describe('CtoContactUsAirplaneComponent', () => {
  let component: CtoContactUsAirplaneComponent;
  let fixture: ComponentFixture<CtoContactUsAirplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtoContactUsAirplaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtoContactUsAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
