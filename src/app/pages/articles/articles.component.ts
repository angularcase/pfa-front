import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ArticleListItemComponent } from "./article-list-item/article-list-item.component";
import { ArticleDto, ArticlesService, StrapiResponse } from '../../core/services/articles.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListItemComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: ArticleDto[] = [];

  constructor(
    private translate: TranslateService,
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit(): void {
    const lang = this.translate.currentLang;

    this.articlesService.getArticles(lang).subscribe((response: ArticleDto[] | null) => {
      this.articles = response ?? [];
    });
  }
}
