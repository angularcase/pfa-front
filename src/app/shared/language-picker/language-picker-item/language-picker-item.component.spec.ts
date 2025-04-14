import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePickerItemComponent } from './language-picker-item.component';

describe('LanguagePickerItemComponent', () => {
  let component: LanguagePickerItemComponent;
  let fixture: ComponentFixture<LanguagePickerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagePickerItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
