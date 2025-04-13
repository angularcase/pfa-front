import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ArticleListItemComponent } from "./article-list-item/article-list-item.component";
import { ArticleDto, ArticlesService, StrapiResponse } from '../../core/services/articles.service';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var HSStickyBlock: any;

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListItemComponent, RouterModule, TranslateModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  articles: ArticleDto[] = [];

  constructor(
    private translate: TranslateService,
    private articlesService: ArticlesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Promise.all(Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
        img.onload = img.onerror = resolve
      })))
      .then(() => {
        new HSStickyBlock('.js-sticky-block', {
          targetSelector: document.getElementById('header')?.classList.contains('navbar-fixed') ? '#header' : null
        })
      })
    }
  }

  ngOnInit(): void {
    const lang = this.translate.currentLang;

    this.articlesService.getArticles(lang).subscribe((response: ArticleDto[] | null) => {
      this.articles = response ?? [];
    });
  }
}
