import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ArticleListItemComponent } from "./article-list-item/article-list-item.component";
import { ArticleDto, ArticlesService, PaginationRequestDto, PaginationResponseDto, StrapiResponse } from '../../core/services/articles.service';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { CtoContactUsAirplaneComponent } from '../../shared/cto-contact-us-airplane/cto-contact-us-airplane.component';
import { SearchComponent } from '../../shared/search/search.component';
import { BreadCrumbsComponent } from '../../shared/bread-crumbs/bread-crumbs.component';
import { BreadCrumbsService } from '../../core/services/bread-crumbs.service';
import { Action, PaginationComponent } from '../../shared/pagination/pagination.component';

declare var HSStickyBlock: any;

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    ArticleListItemComponent,
    RouterModule,
    TranslateModule,
    CtoContactUsAirplaneComponent,
    SearchComponent,
    BreadCrumbsComponent,
    PaginationComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit, AfterViewInit, OnDestroy {

  articles: ArticleDto[] = [];
  pagination!: PaginationResponseDto;

  public readonly PageSize = 2;

  
  constructor(
    private translate: TranslateService,
    private articlesService: ArticlesService,
    @Inject(PLATFORM_ID) private platformId: Object,
    protected breadCrumbsService: BreadCrumbsService
  ) {
  }

  onPaginationAction(action: Action) {
    if (action === Action.Previous) {
      this.load(this.pagination.page - 1);
    } else {
      this.load(this.pagination.page + 1);
    }
  }

  ngAfterViewInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   Promise.all(Array.from(document.images)
    //     .filter(img => !img.complete)
    //     .map(img => new Promise(resolve => {
    //     img.onload = img.onerror = resolve
    //   })))
    //   .then(() => {
    //     new HSStickyBlock('.js-sticky-block', {
    //       targetSelector: document.getElementById('header')?.classList.contains('navbar-fixed') ? '#header' : null
    //     })
    //   })
    // }
  }

  ngOnInit(): void {
    this.breadCrumbsService.set([{
      label: this.translate.instant('app.pages.articles.title'),
      url: 'articles',
      active: true
    }]);

    this.load(1);
  }

  load(page: number) {
    const lang = this.translate.currentLang;

    const paginationRequest: PaginationRequestDto = {
      page: page,
      pageSize: this.PageSize
    };

    this.articlesService.getArticles(lang, paginationRequest).subscribe((response: StrapiResponse<ArticleDto[]>) => {
      this.pagination = response.meta.pagination;
      this.articles = response.data ?? [];
    });
  }

  ngOnDestroy(): void {
    this.breadCrumbsService.set([]);
  }
}
