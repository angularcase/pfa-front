import { Component } from '@angular/core';
import { ArticleDto } from '../../core/services/articles.service';
import { ArticlesService } from '../../core/services/articles.service';
import { PopularArticleItemComponent } from './popular-article-item/popular-article-item.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-popular-articles',
  imports: [PopularArticleItemComponent],
  templateUrl: './popular-articles.component.html',
  styleUrl: './popular-articles.component.scss'
})
export class PopularArticlesComponent {

  articles: ArticleDto[] = [];

  constructor(private articlesService: ArticlesService, private translate: TranslateService) {
    this.articlesService.getPopularArticles(this.translate.currentLang).subscribe((articles) => {
      this.articles = articles.data.slice(0, 6);
    });
  }

}
