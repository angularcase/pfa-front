import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { ArticleDto } from '../../core/services/articles.service';
import { ArticlesService } from '../../core/services/articles.service';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { SearchComponent } from "../../shared/search/search.component";
import { CtoContactUsAirplaneComponent } from "../../shared/cto-contact-us-airplane/cto-contact-us-airplane.component";
import { BreadCrumbsComponent } from '../../shared/bread-crumbs/bread-crumbs.component';
import { BreadCrumbsService } from '../../core/services/bread-crumbs.service';

@Component({
  selector: 'app-article',
  imports: [TranslateModule, SearchComponent, CtoContactUsAirplaneComponent, BreadCrumbsComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input() slug!: string;

  article!: ArticleDto;

  get apiUrl() {
    return environment.strapiUrl;
  }

  constructor(
    private articlesService: ArticlesService,
    private translate: TranslateService,
    private localizeRouterService: LocalizeRouterService,
    protected breadCrumbsService: BreadCrumbsService
  ) { }

  ngOnInit() {
    const lang = this.translate.currentLang;

    this.articlesService.getArticleBySlug(this.slug, lang).subscribe({
      next: (article: ArticleDto) => {
        console.log(article);

        this.article = article;

        this.breadCrumbsService.set([
          {
            label: this.translate.instant('app.pages.articles.title'),
            url: 'articles',
            active: false
          },
          {
            label: this.article.title,
            url: '',
            active: true
          }
        ]);
      },
      error: (error: Error) => {
        const translatedRoute = this.localizeRouterService.translateRoute('/404');
        console.log(translatedRoute);
        // this.router.navigate([translatedRoute]);
      }
    });
  }

  ngOnDestroy(): void {
    this.breadCrumbsService.set([]);
  }
}
