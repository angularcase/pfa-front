import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularArticleItemComponent } from './popular-article-item.component';

describe('PopularArticleItemComponent', () => {
  let component: PopularArticleItemComponent;
  let fixture: ComponentFixture<PopularArticleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularArticleItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
