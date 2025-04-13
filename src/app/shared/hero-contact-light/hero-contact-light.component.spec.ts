import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContactLightComponent } from './hero-contact-light.component';

describe('HeroContactLightComponent', () => {
  let component: HeroContactLightComponent;
  let fixture: ComponentFixture<HeroContactLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroContactLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroContactLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
