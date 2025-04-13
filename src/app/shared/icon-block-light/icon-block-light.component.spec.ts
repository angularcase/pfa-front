import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBlockLightComponent } from './icon-block-light.component';

describe('IconBlockLightComponent', () => {
  let component: IconBlockLightComponent;
  let fixture: ComponentFixture<IconBlockLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBlockLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBlockLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
