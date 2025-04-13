import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLightComponent } from './hero-light.component';

describe('HeroLightComponent', () => {
  let component: HeroLightComponent;
  let fixture: ComponentFixture<HeroLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
