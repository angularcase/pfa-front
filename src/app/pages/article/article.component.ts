import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Apollo, gql } from 'apollo-angular';
import { environment } from '../../../environments/environment';
import { ArticleDto } from '../../core/services/articles.service';
import { StrapiResponse } from '../../core/services/articles.service';
import { ArticlesService } from '../../core/services/articles.service';

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
    private translate: TranslateService
  ) { }

  ngOnInit() {
    const lang = this.translate.currentLang;

    this.articlesService.getArticleBySlug(this.slug, lang).subscribe((article: ArticleDto) => {
      this.article = article;
    });
  }
}
