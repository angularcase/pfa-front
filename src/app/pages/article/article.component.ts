import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { ArticleDto } from '../../core/services/articles.service';
import { ArticlesService } from '../../core/services/articles.service';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  imports: [TranslateModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  @Input() slug!: string;

  article!: ArticleDto;

  get apiUrl() {
    return environment.strapiUrl;
  }

  constructor(
    private articlesService: ArticlesService,
    private translate: TranslateService,
    private localizeRouterService: LocalizeRouterService,
    private router: Router
  ) { }

  ngOnInit() {
    const lang = this.translate.currentLang;

    this.articlesService.getArticleBySlug(this.slug, lang).subscribe({
      next: (article: ArticleDto) => {
        this.article = article;
      },
      error: (error: Error) => {
        const translatedRoute = this.localizeRouterService.translateRoute('/404');
        console.log(translatedRoute);
        this.router.navigate([translatedRoute]);
      }
    });
  }
}
