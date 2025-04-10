import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ArticleListItemComponent } from "./article-list-item/article-list-item.component";
import { Article, GetArticlesGQL, GetArticlesQuery } from '../../graphql/generated';
import { ApolloQueryResult, Observable } from '@apollo/client/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListItemComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: Partial<Article>[] = [];

  constructor(
    private getArticlesGQL: GetArticlesGQL,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
    const lang = this.translate.currentLang;

    this.getArticlesGQL.fetch({ locale: lang }).pipe(
      map(result => result.data.articles)
    ).subscribe((articles) => {
      this.articles = articles.filter((article) => article !== null);
      console.log(this.articles);
    });
  }
}
